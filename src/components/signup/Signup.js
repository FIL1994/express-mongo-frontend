import React, { Component } from "react";
import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import PasswordInput from "grommet/components/PasswordInput";
import TextInput from "grommet/components/TextInput";
import FormField from "grommet/components/FormField";
import FormFields from "grommet/components/FormFields";
import Button from "grommet/components/Button";
import Form from "grommet/components/Form";
import Header from "grommet/components/Header";
import Footer from "grommet/components/Footer";
import axios from "axios";
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

  onSignup = e => {
    e.preventDefault();
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
                  label="Username"
                />
              </FormField>
              <FormField label="Password">
                <PasswordInput />
              </FormField>
            </FormFields>
            <Footer pad={{ vertical: "medium" }}>
              <Button
                type="submit"
                primary
                fill
                label="Signup"
                onClick={this.onSignup}
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

export default Signup;
