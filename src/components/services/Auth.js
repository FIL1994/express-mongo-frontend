import { Component } from "react";
import { injectState } from "freactal";
import { redirectTo } from "@reach/router"

class Auth extends Component {
  render() {
    console.log("Auth", this.props.state.token)

    return null;
  }
}

export default injectState(Auth);
