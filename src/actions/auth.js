import * as actions from "./actions";

export const login = uid => ({
  type: actions.LOGIN,
  uid
});

export const logout = () => ({
  type: actions.LOGOUT
});
