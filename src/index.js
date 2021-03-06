import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppRouter from "./router/AppRouter";
import { history } from "./router/AppRouter";
import { login, logout } from "./actions/auth";
//import App from "../src/App";
import BubblesLoader from "./components/BubblesLoader";
//import PlayGround from "./components/PlayGround";
import { auth, database } from "./firebase/firebase";
//import { facebook , fbAsyncInit} from "./firebase/facebook";

import "normalize.css";
import "./styles/styles.css";

import registerServiceWorker from "./registerServiceWorker";

//please not that REACT_APP* prefix is madnatory otherwise the env vraibale will be ignored.
console.log(`I am now running in ${process.env.REACT_APP_SECRET_CODE}`);
console.warn(
  "Add your .env.* files to .gitignore as these files are not added by default, in this boilerplate"
);
database()
  .ref("HEALTH_CHECK")
  .set({ env: "PROD" })
  .then(() => {
    console.log("success");
  })
  .catch(error => {
    console.log(error);
  });

const store = configureStore();
//ReactDOM.render(<BubblesLoader />, document.getElementById("root"));
/* setTimeout(() => {
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById("root")
  );
}, parseInt(process.env.REACT_APP_LOADER_TIME, 10)); */

let appHasRendered = false;
const renderApp = () => {
  if (!appHasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <AppRouter />
      </Provider>,
      document.getElementById("root")
    );
    appHasRendered = true;
  }
};

auth().onAuthStateChanged(user => {
  if (user) {
    renderApp();
    store.dispatch(login(user));
    if (history.location.pathname === "/") {
      history.push("/home");
    } else if (history.location.pathname === "/signup") {
      history.push("/account-settings");
    }
  } else {
    renderApp();
    store.dispatch(logout());
    history.push("/");
  }
});



registerServiceWorker();
