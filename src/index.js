import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "./store/auth-context";
import { ActivityContextProvider } from "./store/activity-context";

ReactDOM.render(
  <AuthContextProvider>
    <ActivityContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ActivityContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
