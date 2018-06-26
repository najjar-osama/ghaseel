import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
//import AppRouter from "../src/router/AppRouter";
import App from "../src/App";
import BubblesLoader from "../src/components/BubblesLoader";

import { database } from "./firebase/firebase";

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

ReactDOM.render(<BubblesLoader />, document.getElementById("root"));
setTimeout(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
      {/* <AppRouter /> */}
    </Provider>,
    document.getElementById("root")
  );
}, parseInt(process.env.REACT_APP_LOADER_TIME, 10));

registerServiceWorker();
