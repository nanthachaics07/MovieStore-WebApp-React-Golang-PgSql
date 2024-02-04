import React from "react";
import ReactDOM from "react-dom/client";
import AppClass from "./AppClass.jsx";
// import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <div className="col">
          <AppClass msg="State using Classes!!!!!!!" />
          {/* <App msg="State using Functions!!!!" /> */}
        </div>
      </div>
    </div>
  </React.StrictMode>
);
