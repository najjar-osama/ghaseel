import * as actions from "./actions";
import { auth, googleAuthProvider } from "../firebase/firebase";

export const login = uid => ({
  type: actions.LOGIN,
  uid
});
export const startLogin = () => {
  return () => {
    return auth().signInWithPopup(googleAuthProvider);
  };
};
export const logout = () => ({
  type: actions.LOGOUT
});

export const startLogout = () => {
  return () => {
    return auth().signOut();
  };
};
