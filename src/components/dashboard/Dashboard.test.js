import React from "react";
import ReactDOM from "react-dom";

import { AppWrapper } from "../../helpers/testHelpers";
import Dashboard from "./Dashboard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AppWrapper>
      <Dashboard />
    </AppWrapper>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
