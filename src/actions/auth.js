import * as actions from "./actions";

export const login = uid => ({
  type: actions.LOGIN,
  uid
});

export const performLogin = () => {
  return () => {
    // TDOD: perfore firebase login
  };
};

export const logout = () => ({
  type: actions.LOGOUT
});

export const performLogout = () => {
  return () => {
    // TODO : perform firebase logout
  };
};
