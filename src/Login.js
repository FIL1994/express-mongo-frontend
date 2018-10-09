import React, { Component } from "react";
import Box from "grommet/components/Box";
import LoginForm from "grommet/components/LoginForm";
import axios from "axios";
import { injectState } from "freactal";
import { navigate } from "@reach/router";

import "./login.scss";

class Login extends Component {
  state = {
    error: ""
  };

  onSubmit = async ({ username, password, rememberMe }) => {
    try {
      const res = await axios.post(process.env.REACT_APP_API_URL + "login", {
        username,
        password
      });

      const { access_token } = res.data;
      this.props.effects.setToken(access_token);
      navigate("/page");
    } catch (e) {
      this.setState({ error: "invalid credentials" });
    }
  };

  render() {
    return (
      <Box
        id="login-form"
        flex
        full
        colorIndex="neutral-4-t"
        justify="center"
        align="center"
      >
        <LoginForm
          title="My App"
          textAlign="left"
          usernameType="text"
          onSubmit={this.onSubmit}
          errors={[this.state.error]}
        />
      </Box>
    );
  }
}

export default injectState(Login);
