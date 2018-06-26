import React from "react";
import bubbles_loader from "../bubbles_loader.gif";

const BubblesLoader = () => (
  <div className="main-container flex flex--center flex-dir--col">
    <img
      className="bubbles-loader-img"
      src={bubbles_loader}
      alt="bubbles loader"
    />
    <h2 className="pulse">loading...</h2>
  </div>
);

export default BubblesLoader;
