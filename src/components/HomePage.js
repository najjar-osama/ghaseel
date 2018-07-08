import React from "react";
import { connect } from "react-redux";
import { history } from "../router/AppRouter";
import { startLogout } from "../actions/auth";
export const HomePage = ({ startLogout }) => (
  <div className="main-container flex flex--center flex-dir--col">
    <h1>Welcome!</h1>
    <button onClick={startLogout}>Logout</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(HomePage);
