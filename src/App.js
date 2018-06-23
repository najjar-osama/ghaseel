import React from "react";
import { Provider } from "react-redux";
import createStore from "./store/configureStore";
import { login } from "./actions/auth";
import "normalize.css";
import "./styles/styles.css";

const store = createStore();
console.log(store.getState());
store.subscribe(() => {
  console.log(store.getState());
});

setTimeout(() => {
  store.dispatch(login("123abc"));
}, 3000);

const App = () => (
  <Provider store={store}>
    <div className="main">
      <h1>Ghaseel App!</h1>
    </div>
  </Provider>
);

export default App;
