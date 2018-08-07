import * as actions from "./actions";
import { auth, googleAuthProvider,facebookAuthProvider } from "../firebase/firebase";

export const login = ({
  uid,
  displayName,
  email,
  emailVerified,
  photoURL
}) => ({
  type: actions.LOGIN,
  uid,
  displayName,
  email,
  emailVerified,
  photoURL
});
export const startLoginWithGoogle = () => {
  return () => {
    return auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLoginWithFacebook = () =>{
  return () =>{
    return auth().signInWithPopup(facebookAuthProvider);
  }
};
export const logout = () => ({
  type: actions.LOGOUT
});

export const startLogout = () => {
  return () => {
    return auth().signOut();
  };
};
