import React, { Fragment } from "react";
import { render } from "react-dom";
import List from "./container/List";
import "bootswatch/dist/lux/bootstrap.min.css";
import "./index.css";

const App = () => (
  <Fragment>
      <nav className="navbar navbar-dark bg-dark">
         <a href="" className="navbar-brand">Movie App</a>
      </nav>
    <div className="container-fluid">
      <List />
    </div>
  </Fragment>
);

render(<App />, document.getElementById("root"));
