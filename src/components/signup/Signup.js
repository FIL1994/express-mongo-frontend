import React, { Component } from "react";
import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import TextInput from "grommet/components/TextInput";
import FormField from "grommet/components/FormField";
import FormFields from "grommet/components/FormFields";
import Button from "grommet/components/Button";
import Form from "grommet/components/Form";
import Header from "grommet/components/Header";
import Footer from "grommet/components/Footer";
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
    const signupResponse = await axios.post(
      process.env.REACT_APP_API_URL + "signup",
      {
        username,
        password
      }
    );
    console.log("signed up", signupResponse.data);

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
          <Form onSubmit={this.onSignup} pad="medium">
            <Box align="center">
              <Header>
                <Heading tag="h1" strong>
                  New App
                </Heading>
              </Header>
            </Box>
            <FormFields pad={{ vertical: "medium" }}>
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
            </FormFields>
            <Footer pad={{ vertical: "medium" }}>
              <Button
                type="button"
                primary
                fill
                label="Signup"
                onClick={this.isFormValid() ? this.onSignup : null}
              />
            </Footer>
          </Form>
          <Link className="form-link" to="/">
            Already have an account? Login here.
          </Link>
        </Box>
      </Box>
    );
  }
}

export default injectState(Signup);
