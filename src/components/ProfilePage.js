import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export const ProfilePage = props => (
  <div className="main-container flex flex--center flex-dir--col">
    <h1>{`Hi ${props.displayName || props.email}!`}</h1>
    <Link to="/home">
      <h4>Home Page</h4>
    </Link>
  </div>
);

const mapStateToProps = state => ({ ...state.auth });

export default connect(mapStateToProps)(ProfilePage);
