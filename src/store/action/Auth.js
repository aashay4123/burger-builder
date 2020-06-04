import * as Types from "./actionTypes";

export const auth = (email, password, isSignup) => {
  return {
    type: Types.AUTH_USER,
    email: email,
    password: password,
    isSignup: isSignup,
  };
};

export const authStart = () => {
  return {
    type: Types.SUBMIT_AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: Types.SUBMIT_AUTH_SUCCESS,
    token: token,
    userId: userId,
  };
};

export const authFail = (err) => {
  return {
    type: Types.SUBMIT_AUTH_FAIL,
    error: err,
  };
};

export const logout = () => {
  return {
    type: Types.AUTH_INITIATE_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return {
    type: Types.AUTH_CHECK_TIMEOUT,
    expirationTime: expirationTime,
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: Types.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheckState = () => {
  return {
    type: Types.AUTH_CHECK_STATE,
  };
};

export const logoutSucceed = () => {
  return {
    type: Types.AUTH_LOGOUT,
  };
};
