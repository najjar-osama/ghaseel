import React from "react";
import { auth } from "../firebase/firebase";
import isEmail from "validator/lib/isEmail";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      hasError: false,
      errorMessage: "",
      formSubmitted: false
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange.bind(
      this
    );
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleEmailChange(event) {
    const nextState = { email: event.target.value };
    this.setState(() => nextState);
  }
  handlePasswordChange(event) {
    const nextState = { password: event.target.value };
    this.setState(() => nextState);
  }
  handleConfirmPasswordChange(event) {
    const nextState = { confirmPassword: event.target.value };
    this.setState(() => nextState);
  }
  handleFormSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    if (!isEmail(email)) {
      const errorEmailNextState = {
        hasError: true,
        errorMessage:
          "invalid email address, please enter a valid email address"
      };
      this.setState(() => errorEmailNextState);
      return;
    }
    const password = event.target.password.value.trim() || "";
    const confirmPassword = event.target.confirmPassword.value.trim() || "";
    const passwordsMatch = password === confirmPassword;
    if (!passwordsMatch) {
      const errorPasswordsNextState = {
        hasError: true,
        errorMessage: "passwords don't match, please renter your passwords."
      };
      this.setState(() => errorPasswordsNextState);
      return;
    }

    const submitNextState = {
      formSubmitted: true,
      hasError: false,
      errorMessage: ""
    };
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const newUser = auth().currentUser;
        newUser
          .updateProfile({
            displayName: "Johne Doe",
            photoURL: "test"
          })
          .then(() => {
            newUser.sendEmailVerification();
          });
      })
      .catch(error => {
        console.log(error);
      });
    /* this.setState(
      () => submitNextState,
      () => {
        // redirect to a protected page 'cause at this point user is authenticated
        setTimeout(() => {
          this.setState(() => ({
            formSubmitted: false,
            email: "",
            password: "",
            confirmPassword: "",
            hasError: false,
            errorMessage: ""
          }));
        }, 3000);
      }
    ); */
  }
  render() {
    const loader = <div>Submitting..</div>;
    const form = (
      <form onSubmit={this.handleFormSubmit}>
        <label htmlFor="email" aria-label="email" />
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <label htmlFor="password" aria-label="password" />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <label htmlFor="password" aria-label="confirm password" />
        <input
          type="password"
          name="confirmPassword"
          value={this.state.confirmPassword}
          onChange={this.handleConfirmPasswordChange}
        />
        {this.state.hasError && (
          <div>
            <p>{this.state.errorMessage}</p>
          </div>
        )}
        <button type="submit">Signup</button>
      </form>
    );
    return this.state.formSubmitted ? loader : form;
  }
}

export default SignupForm;
