import { provideState, update, mergeIntoState } from "freactal";
import { stat } from "fs";

const wrapComponentWithState = provideState({
  initialState: () => ({
    token: ""
  }),
  effects: {
    getState: () => state => state,
    setToken: (effects, token) => state => Object.assign({}, state, { token })
  }
});

export default wrapComponentWithState;
