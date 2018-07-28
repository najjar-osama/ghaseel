import React from "react";
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
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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
  handleFormSubmit(event) {
    event.preventDefault();
    const loginCredentials = {
      email: event.target.email.value,
      password: event.target.password.value
    };
    //make api call
  }
  render() {
    return (
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
          onChange={this.handlePasswordChange}
        />
        <div>{this.state.hasError && <p>{this.state.errorMessage}</p>}</div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
