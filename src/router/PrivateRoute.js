import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ isAuth, component: Component, ...rest }) => {
  return isAuth ? (
    <Route {...rest} component={props => <Component {...props} />} />
  ) : (
    <Redirect to="/" />
  );
};

const mapStateToProps = state => ({
  isAuth: state.auth.uid && true
});
export default connect(mapStateToProps)(PrivateRoute);
