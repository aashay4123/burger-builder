import reducer from "./auth";
import * as actionTypes from "../action/actionTypes";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      id: null,
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });

  it("should store the token upon login", () => {
    expect(
      reducer(
        {
          token: null,
          id: null,
          error: null,
          loading: false,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.SUBMIT_AUTH_SUCCESS,
          token: "some-token",
          userId: "some-user-id",
        }
      )
    ).toEqual({
      token: "some-token",
      id: "some-user-id",
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });
});
