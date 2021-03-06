import React, { Component } from "react";
import { Box, TextInput, Button, Heading } from "grommet";
import axios from "axios";
import { injectState } from "freactal";
import { navigate } from "@reach/router";

import Link from "../common/Link";
import "./signup.scss";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    verifyPassword: ""
  };

  componentDidMount() {
    document.body.style.backgroundColor = "#525a76";
    document.getElementById("username").focus();
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  doPasswordsMatch = () => this.state.password === this.state.verifyPassword;

  isFormValid = () => {
    if (!this.doPasswordsMatch()) return false;
    if (this.state.username.length < 1 || this.state.password.length < 1) {
      return false;
    }
    return true;
  };

  onSignup = async e => {
    e.preventDefault();
    if (!this.isFormValid()) return;

    const { username, password } = this.state;
    await axios.post(process.env.REACT_APP_API_URL + "signup", {
      username,
      password
    });

    const loginResponse = await axios.post(
      process.env.REACT_APP_API_URL + "login",
      {
        username,
        password
      }
    );

    const { access_token, user } = loginResponse.data;
    await this.props.effects.onLogin({ access_token, user });
    navigate("/dash");
  };

  render() {
    return (
      <Box
        flex
        justify="center"
        align="center"
        style={{
          minHeight: "100vh"
        }}
      >
        <Box background="light-2" justify="center" align="center" pad="large">
          <Heading level="2" margin="small">
            New App
          </Heading>
          <form onSubmit={this.onSignup}>
            <div>
              <label htmlFor="username">Username</label>
              <TextInput
                id="username"
                name="username"
                value={this.state.username}
                onChange={e => {
                  this.setState({ username: e.target.value });
                }}
              />
              <label htmlFor="password">Password</label>
              <TextInput
                type="password"
                name="password"
                value={this.state.password}
                onChange={e => {
                  this.setState({ password: e.target.value });
                }}
              />
              <label htmlFor="verifyPassword">Verify Password</label>
              <TextInput
                id="verifyPassword"
                type="password"
                name="verifyPassword"
                value={this.state.verifyPassword}
                onChange={e => {
                  this.setState({ verifyPassword: e.target.value });
                }}
              />
            </div>
            <footer>
              <Button
                type="button"
                primary
                fill
                label="Signup"
                onClick={this.isFormValid() ? this.onSignup : null}
                style={{
                  marginTop: 15,
                  marginBottom: 15
                }}
              />
            </footer>
          </form>
          <Link className="form-link" to="/">
            Already have an account? Login here.
          </Link>
        </Box>
      </Box>
    );
  }
}

export default injectState(Signup);
