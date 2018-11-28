import React, { Component } from "react";
import { Box, TextInput, Button } from "grommet";
import Link from "../common/Link";
import axios from "axios";
import { injectState } from "freactal";
import { navigate } from "@reach/router";

import "./login.scss";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: ""
  };

  onSubmit = async () => {
    const { username, password } = this.state;

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
          New App
          <form>
            Username
            <TextInput
              name="username"
              onChange={e => {
                this.setState({ username: e.target.value });
              }}
              value={this.state.username}
            />
            Password
            <TextInput
              name="password"
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
              value={this.state.password}
            />
            <Button label="Login" onClick={this.onSubmit} />
          </form>
          {this.state.error && (
            <div style={{ color: "red" }}>{this.state.error}</div>
          )}
          <Link className="form-link" to="/signup">
            Don't have an account? Signup here.
          </Link>
        </Box>
      </Box>
    );
  }
}

export default injectState(Login);
