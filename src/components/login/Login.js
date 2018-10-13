import React, { Component } from "react";
import Box from "grommet/components/Box";
import LoginForm from "grommet/components/LoginForm";
import Link from "../common/Link";
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

      const { access_token, user } = res.data;
      await this.props.effects.onLogin({ access_token, user });
      navigate("/dash");
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
        <Box colorIndex="light-2" justify="center" align="center" pad="medium">
          <LoginForm
            title="New App"
            textAlign="left"
            usernameType="text"
            onSubmit={this.onSubmit}
            errors={[this.state.error]}
          />
          <Link className="form-link" to="/signup">
            Don't have an account? Signup here.
          </Link>
        </Box>
      </Box>
    );
  }
}

export default injectState(Login);
