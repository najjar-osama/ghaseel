import React from "react";
import { history } from "../router/AppRouter";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { Link } from "react-router-dom";
import logo from "../ghaseel-logo.svg";
export const LoginPage = props => (
  <div className="app-cover">
    <div className="main-container flex flex--center flex-dir--col text-center opacity-effect">
      <form className="login-form flex flex--center flex-dir--col shadow">
        <Link to="/" className="brand-link">
          <div className="logo-block flex flex--center flex-dir--row">
            <img className="logo-block__logo" src={logo} />
            <h1 className="logo-block__title">Ghaseel</h1>
          </div>
        </Link>
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
