import React from "react";
import { Link } from "react-router-dom";
export const NotFound = () => (
  <div className="main-container flex flex--center flex-dir--col">
    <h3>404 | Web Pages are like socks sometimes cannot be found!</h3>
    <Link to="/home">Back to home page</Link>
  </div>
);

export default NotFound;
