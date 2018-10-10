import React, { Component, Fragment } from "react";
import { injectState } from "freactal";
import { redirectTo } from "@reach/router";

class Auth extends Component {
  render() {
    const { isInitialized, token } = this.props.state;

    if (isInitialized && !token) {
      redirectTo("/");
    }

    return <Fragment>{isInitialized && this.props.children}</Fragment>;
  }
}

export default injectState(Auth);
