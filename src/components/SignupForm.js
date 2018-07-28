import React from "react";

class SignupForm extends React.Component {
  constructor(props) {
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      hasError: false,
      errorMessage: ""
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleConfirmPasswordChange = this.handleConfirmPasswordChange(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleEmailChange(event){
    const nextState = { email : event.target.value};
    this.setState(()=>(nextState));
  }
  handlePasswordChange(event){
      const nextState = {password : event.target.value};
      this.setState(()=>(this.nextState));
  }
  handleConfirmPasswordChange(event){
    const nextState = { confirmPassword : event.target.value};
    this.setState(()=>(nextState));
  }
  handleFormSubmit(event){
      event.preventDefault();
  }
  render(){
      return(
        <form onSubmit={this.handleFormSubmit}>
            <label htmlFor="email" aria-label="email"></label>
            <input type="text" name="email" value={this.state.email} onChange={this.handleEmailChange}/>
            <label htmlFor="password" aria-label="password"></label>
            <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
            <label htmlFor="password" aria-label="confirm-password"></label>
            <input type="password" name="confirm-password" value={this.state.confirmPassword} onChange={this.handleConfirmPasswordChange}/>
        </form>
      );
  }
}


export default SignupForm;