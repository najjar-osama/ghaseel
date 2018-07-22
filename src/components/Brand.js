import React from "react";
import { Link } from "react-router-dom";
import logo from "../ghaseel-logo-white.svg";
export const Brand = () => (
  <div className="brand-logo">
    <Link to="/home">
      <img className="brand-logo__image" src={logo} alt="Ghaseel Logo" />
    </Link>
  </div>
);

export default Brand;
