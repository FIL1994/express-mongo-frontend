import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";

import wrapComponentWithState from "./state";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./styles";
import "./index.scss";

grommet.global.font.family = "Work Sans, " + grommet.global.font.family;

const MyApp = wrapComponentWithState(() => (
  <Grommet theme={grommet} centered={false}>
    <Router>
      <Login path="/" />
      <Signup path="/signup" />
      <App path="*" />
    </Router>
  </Grommet>
));

ReactDOM.render(<MyApp />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

console.log("theme", grommet);
