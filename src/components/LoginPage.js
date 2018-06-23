import React from "react";
import { history } from "../routers/AppRouter";

const LoginPage = () => (
  <div>
    <h1>Login page</h1>
    <button
      onClick={() => {
        history.push("/home");
      }}
    >
      Login
    </button>
  </div>
);

export default LoginPage;
