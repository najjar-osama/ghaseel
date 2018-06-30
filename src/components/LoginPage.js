import React from "react";
import { history } from "../router/AppRouter";
import { connect } from "react-redux";
import { login } from "../actions/auth";
export const LoginPage = props => (
  <div className="app-cover">
    <div className="main-container flex flex--center flex-dir--col text-center opacity-effect">
      <form className="login-form flex flex--center flex-dir--col shadow">
        <div className="logo-block flex flex--center">
          <div className="logo-block__logo" />
          <h1 className="logo-block__title">Ghaseel</h1>
        </div>
        <input
          type="text"
          className="login-form__input"
          placeholder="enter your email"
        />
        <input
          type="password"
          className="login-form__input"
          placeholder="enter your password"
        />
        <button
          className="login-form__submit"
          onClick={() => {
            props.login("123abc");
            history.push("/home");
          }}
        >
          Login
        </button>
      </form>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  login: uid => dispatch(login(uid))
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
