import React from "react";
import { Link } from "react-router-dom";
import logo from "../ghaseel-logo-white.svg";
export const Brand = () => (
  <div className="brand-logo">
    <Link to="/home" className="brand-logo__link flex flex--center-v">
      <img className="brand-logo__image" src={logo} alt="Ghaseel Logo" />
      <span className="brand-logo__text">Ghaseel</span>
    </Link>
  </div>
);

export default Brand;
