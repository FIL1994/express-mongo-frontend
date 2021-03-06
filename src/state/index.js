import { provideState } from "freactal";
import localForage from "localforage";
import axios from "axios";

const wrapComponentWithState = provideState({
  initialState: () => ({
    isInitialized: false,
    token: "",
    user: {}
  }),
  effects: {
    getState: () => state => state,
    initialize: async effects => {
      let data = {};
      try {
        const token = await localForage.getItem("token");

        axios.defaults.headers.common.Authorization = "Bearer " + token;
        const currentUserResponse = await axios.get(
          process.env.REACT_APP_API_URL + "current-user"
        );

        data = { token, user: currentUserResponse.data };
      } catch (e) {}

      return Promise.resolve(state => {
        return { ...state, isInitialized: true, ...data };
      });
    },
    onLogin: (effects, { access_token: token, user }) => state => {
      localForage.setItem("token", token);

      axios.defaults.headers.common.Authorization = "Bearer " + token;

      return Object.assign({}, state, { token, user });
    },
    onLogout: () => state => {
      axios.defaults.headers.common.Authorization = "";
      localForage.removeItem("token");

      return Object.assign({}, state, { token: "", user: {} });
    }
  }
});

export default wrapComponentWithState;
