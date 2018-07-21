import React from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import { Link } from "react-router-dom";
export const HomePage = ({ startLogout }) => (
  <div className="main-container flex flex--center flex-dir--col">
    <h1>Welcome To Ghaseel App!</h1>
    <button onClick={startLogout}>Logout</button>
    <Link to="/profile">
      <h4>My Profile</h4>
    </Link>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(HomePage);
