import React from "react";
import { history } from "../router/AppRouter";
import { connect } from "react-redux";
import { login } from "../actions/auth";
export const LoginPage = props => (
  <div>
    <h1>Login Page</h1>
    <button
      onClick={() => {
        props.login("123abc");
        history.push("/home");
      }}
    >
      Login
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  login: uid => dispatch(login(uid))
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
