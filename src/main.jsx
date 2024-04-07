import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/Babysitters">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
