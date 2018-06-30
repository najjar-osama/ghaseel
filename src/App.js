import React from "react";
import LoginPage from "./components/LoginPage";
const App = () => (
  <div className="app-cover">
    <div className="main-container flex flex--center text-center opacity-effect">
      <div>
        <h1 className="title">Ghaseel</h1>
        <h2 className="subtitle">Let's get clean!</h2>
        <LoginPage />
      </div>
    </div>
  </div>
);
export default App;
