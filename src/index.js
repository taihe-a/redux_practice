import React from "react";
import ReactDOM from "react-dom";
import { provider } from "redux";
import { createStore } from "redux";
import "./styles.css";
import reducer from "./reducer";
import App from "./App";
import { Provider } from "react-redux";

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: "PLUS", payload: { num: 1 } });

function Ap() {
  return (
    <Provider store={store}>
      <div className="App">
        <App />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Ap />, rootElement);
