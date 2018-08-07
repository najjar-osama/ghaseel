import React from "react";
import { auth } from "../firebase/firebase";
import isEmail from "validator/lib/isEmail";
import { startLoginWithGoogle , startLoginWithFacebook } from "../actions/auth";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      hasError: false,
      errorMessage: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginWithGoogle = this.handleLoginWithGoogle.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleLoginWithFacebook =  this.handleLoginWithFacebook.bind(this);
  }
  handleEmailChange(event) {
    const nextState = {
      email: event.target.value
    };
    this.setState(() => nextState);
  }
  handlePasswordChange(event) {
    const nextState = { password: event.target.value };
    this.setState(() => nextState);
  }
  handleLoginWithGoogle(event) {
    event.preventDefault();
    startLoginWithGoogle()();
  }
  handleLoginWithFacebook(event){
    event.preventDefault();
    startLoginWithFacebook()();
  }
  handleFormSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!isEmail(email)) {
      const nextState = {
        hasError: true,
        errorMessage: "Invalid email. Please, enter a valid email."
      };
      this.setState(() => nextState);
      return;
    }
    if (!password) {
      const nextState = {
        hasError: true,
        errorMessage: "Invalid password. Please, enter a valid password."
      };

      this.setState(() => nextState);
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {})
      .catch(error => {
        this.setState(() => {
          hasError: true;
          errorMessage: error.message;
        });
      });
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form__block">
          <label className="form__label" htmlFor="email" aria-label="email" />
          <input
            className="form__text-input"
            type="text"
            name="email"
            placeholder="your email.."
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div className="form__block">
          <label
            className="form__label"
            htmlFor="password"
            aria-label="password"
          />
          <input
            className="form__text-input"
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handlePasswordChange}
          />
        </div>
        {this.state.hasError && (
          <div className="form__feedback-block">
            <p className="feedback-message--error feedback-message">
              {this.state.errorMessage}
            </p>
          </div>
        )}
        <div className="form__actions-block">
          <button
            className="button button--default button--block"
            type="submit"
          >
            Login
          </button>
          <button
            className="button button--default button--block"
            onClick={this.handleLoginWithGoogle}
          >
            <b>+</b>Google
          </button>
          <button
            className="button button--default button--block"
            onClick={this.handleLoginWithFacebook}
          >
            Facebook
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
