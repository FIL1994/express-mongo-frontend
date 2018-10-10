import { provideState, update, mergeIntoState } from "freactal";

const wrapComponentWithState = provideState({
  initialState: () => ({
    token: "",
    user: {}
  }),
  effects: {
    getState: () => state => state,
    onLogin: (effects, {token, user}) => state => Object.assign({}, state, { token, user })
  }
});

export default wrapComponentWithState;
