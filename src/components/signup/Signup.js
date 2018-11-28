import React, { Component } from "react";
import Box from "grommet/components/Box";
import { Heading, TextInput, FormField, Button } from "grommet";
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
    document.getElementById("username-field").focus();
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

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
      <Box flex full colorIndex="neutral-4-t" justify="center" align="center">
        <Box colorIndex="light-2" justify="center" align="center" pad="medium">
          <form onSubmit={this.onSignup}>
            <Box align="center">
              <header>
                <Heading level="1">New App</Heading>
              </header>
            </Box>
            <div>
              <FormField label="Username">
                <TextInput
                  id="username-field"
                  style={{
                    width: "100%"
                  }}
                  name="username"
                  value={this.state.username}
                  onDOMChange={this.onChange}
                />
              </FormField>
              <FormField label="Password">
                <TextInput
                  type="password"
                  name="password"
                  value={this.state.password}
                  onDOMChange={this.onChange}
                />
              </FormField>
              <FormField label="Verify Password">
                <TextInput
                  type="password"
                  name="verifyPassword"
                  value={this.state.verifyPassword}
                  onDOMChange={this.onChange}
                />
              </FormField>
            </div>
            <footer>
              <Button
                type="button"
                primary
                fill
                label="Signup"
                onClick={this.isFormValid() ? this.onSignup : null}
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
