import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import RestApiData from "./components/RestApiData";
import InsertData from "./components/InsertData";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <RestApiData />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
