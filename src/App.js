import React from "react";
import { Provider } from "react-redux";
import createStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import "normalize.css";
import "./styles/styles.css";

const store = createStore();

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default App;
