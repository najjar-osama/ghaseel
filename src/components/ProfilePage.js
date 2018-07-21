import React from "react";
import { connect } from "react-redux";
export const ProfilePage = props => (
  <div>
    <h1>{`Hi ${props.displayName}!`}</h1>
  </div>
);

const mapStateToProps = state => ({ ...state.auth });

export default connect(mapStateToProps)(ProfilePage);
