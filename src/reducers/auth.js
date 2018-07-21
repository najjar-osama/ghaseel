import * as actions from "../actions/actions";

export default (prevState = {}, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        uid: action.uid,
        displayName: action.displayName,
        email: action.email,
        emailVerfied: action.emailVerfied,
        photoURL: action.photoURL
      };
    case actions.LOGOUT:
      return {};
    default:
      return prevState;
  }
};
