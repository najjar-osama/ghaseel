import React from "react";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
export const HomePage = ({ startLogout }) => (
  <div>
    <NavBar />
    <div className="main-container flex flex--center flex-dir--col">
      <h1>Welcome To Ghaseel Laundry Schedule App!</h1>
      <h4>the application is in development mode!</h4>
      <button className="button" onClick={startLogout}>Logout</button>
      <Link to="/profile">
        <h4>My Profile</h4>
      </Link>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(HomePage);
