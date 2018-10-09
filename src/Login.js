import React, { Component } from "react";
import Box from "grommet/components/Box";
import LoginForm from "grommet/components/LoginForm";
import axios from "axios";

class Login extends Component {
  onSubmit = async ({ username, password, rememberMe }) => {
    try {
      const res = await axios.post(process.env.REACT_APP_API_URL + "login", {
        username,
        password
      });

      const { access_token } = res.data;
    } catch (e) {
      alert("invalid credentials");
    }
  };

  render() {
    return (
      <Box flex full colorIndex="neutral-4-t" justify="center" align="center">
        <LoginForm
          title="My App"
          textAlign="left"
          usernameType="text"
          onSubmit={this.onSubmit}
        />
      </Box>
    );
  }
}

export default Login;
