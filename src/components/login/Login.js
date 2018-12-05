import React, { Component } from "react";
import { Box, TextInput, Button, Heading } from "grommet";
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

  componentDidMount() {
    document.body.style.backgroundColor = "#525a76";
    document.getElementById("username-field").focus();
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  onSubmit = async e => {
    e.preventDefault();
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
      <Box id="login-form" flex full justify="center" align="center">
        <Box background="light-2" justify="center" align="center" pad="large">
          <Heading level="2" margin="small">
            New App
          </Heading>
          <form onSubmit={this.onSubmit}>
            Username
            <TextInput
              id="username-field"
              name="username"
              onChange={e => {
                this.setState({ username: e.target.value });
              }}
              value={this.state.username}
            />
            Password
            <TextInput
              type="password"
              name="password"
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
              value={this.state.password}
            />
            <footer>
              <Button
                type="submit"
                primary
                fill
                label="Login"
                onClick={this.onSubmit}
                style={{
                  marginTop: 15,
                  marginBottom: 15
                }}
              />
            </footer>
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
