import React from "react";

import wrapComponentWithState from "../state";

export const AppWrapper = wrapComponentWithState(props => <div {...props} />);
