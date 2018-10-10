import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import GrommetApp from "grommet/components/App";
import "grommet/grommet.min.css";

import wrapComponentWithState from "./state";
import Login from "./components/login/Login";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.scss";

const MyApp = wrapComponentWithState(() => (
  <GrommetApp centered={false}>
    <Router>
      <Login path="/" />
      <App path="*" />
    </Router>
  </GrommetApp>
));

ReactDOM.render(<MyApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
