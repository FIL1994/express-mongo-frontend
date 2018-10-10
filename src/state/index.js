import { provideState, update, mergeIntoState } from "freactal";
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
      const token = await localForage.getItem("token");
      const user = await axios.get(process.env.REACT_APP_API_URL + "current-user", {
        headers: {
          Authorization: "Bearer " + token
        }
      });

      return Promise.resolve(state => {
        return { ...state, isInitialized: true, user: user.data };
      });
    },
    onLogin: (effects, { access_token: token, user }) => state => {
      localForage.setItem("token", token);

      return Object.assign({}, state, { token, user });
    }
  }
});

export default wrapComponentWithState;
