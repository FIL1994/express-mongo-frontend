import React from "react";
import ReactDOM from "react-dom";

import { AppWrapper } from "./helpers/testHelpers";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AppWrapper>
      <App />
    </AppWrapper>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
