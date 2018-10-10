import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import wrapComponentWithState from "./state";

const AppWrapper = wrapComponentWithState(props => <div {...props} />);

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
