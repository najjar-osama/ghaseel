import React from "react";
import SignupForm from "./SignupForm";

export const SignupPage = () => (
  <div className="main-container flex flex--center flex-dir--col">
    <h1>Welcome to Signup Page!</h1>
    <div className="form-wrapper">
      <SignupForm />
    </div>
  </div>
);

export default SignupPage;
