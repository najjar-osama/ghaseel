import React from "react";
import InitAccountSettingsForm from "./InitAccountSettingsForm";
import { Link } from "react-router-dom";

export const AccountSettingsPage = () => (
  <div className="main-container flex flex--center flex-dir--col">
    <h1>Account Setting Page!</h1>
    <div className="form-wrapper">
      <InitAccountSettingsForm />
      <Link to="/home">Home</Link>
    </div>
  </div>
);

export default AccountSettingsPage;
