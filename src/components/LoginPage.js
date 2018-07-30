import React from "react";
import { history } from "../router/AppRouter";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { startLogin, login } from "../actions/auth";
import { Link } from "react-router-dom";
import logo from "../ghaseel-logo.svg";
export const LoginPage = ({ startLogin }) => (
  <div className="app-cover">
    <div className="main-container flex flex--center flex-dir--col text-center opacity-effect">
      <div className="login-form flex flex--center flex-dir--col shadow">
        <div className="flex flex--center flex-dir--col">
          <Link to="/" className="brand-link">
            <div className="logo-block flex flex--center flex-dir--row">
              <img className="logo-block__logo" src={logo} alt="Ghaseel Logo" />
              <h1 className="logo-block__title">Ghaseel</h1>
            </div>
          </Link>
          <LoginForm />
        </div>
        <div className="login-form__extra-links flex flex-dir--row flex--space-between ">
          <Link to="/signup" className="undecorated-link text-white">
            <span>Signup</span>
          </Link>
          <Link to="/password-reset" className="undecorated-link text-white">
            <span>Forgot your password?</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
