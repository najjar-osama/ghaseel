import React from "react";
import { connect } from "react-redux";
import { history } from "../router/AppRouter";
import { logout } from "../actions/auth";
export const HomePage = props => (
  <div>
    <h1>Home Page!!</h1>
    <button
      onClick={() => {
        props.logout();
        history.push("/");
      }}
    >
      Logout
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(HomePage);
