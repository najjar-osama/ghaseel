import * as actions from "../actions/actions";

export default (prevState = {}, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return { uid: action.uid };
    case actions.LOGOUT:
      return {};
    default:
      return prevState;
  }
};
