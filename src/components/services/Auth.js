import React, { Component, Fragment } from "react";
import { injectState } from "freactal";
import { redirectTo } from "@reach/router";

class Auth extends Component {
  componentDidCatch(error, info) {
    console.warn("Error from Auth", error, info);
  }

  static getDerivedStateFromError(error) {
    console.log("Error from auth", error);
  }

  render() {
    const { isInitialized, token } = this.props.state;

    if (isInitialized && !token) {
      redirectTo("/");
    }

    return (
      <Fragment>{(isInitialized && this.props.children) || null}</Fragment>
    );
  }
}

export default injectState(Auth);
