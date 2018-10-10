import React from "react";
import ReactDOM from "react-dom";

import { AppWrapper } from "../../helpers/testHelpers";
import Login from "./Login";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AppWrapper>
      <Login />
    </AppWrapper>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
