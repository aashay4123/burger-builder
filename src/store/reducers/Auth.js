import * as Types from "../action/actionTypes";
import { updateObject } from "../utility";

let initialState = {
  id: null,
  token: null,
  loading: false,
  error: null,
  authRedirectPath: "/",
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null, id: null });
};

const setAuthRedirectPath = (state, action) => {
  return updateObject(state, { authRedirectPath: action.path });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SUBMIT_AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
        id: action.userId,
      };
    case Types.SUBMIT_AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        token: null,
      };
    case Types.SUBMIT_AUTH_START:
      return {
        ...state,
        loading: true,
        token: null,
        error: null,
      };
    case Types.AUTH_LOGOUT:
      return authLogout(state, action);
    case Types.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
    default:
      return state;
  }
};
export default reducer;
