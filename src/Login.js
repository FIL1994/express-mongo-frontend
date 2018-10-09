import React, { Component } from "react";
import Box from "grommet/components/Box";
import Heading from "grommet/components/Heading";
import LoginForm from "grommet/components/LoginForm";

class Login extends Component {
  render() {
    return (
      <Box
        flex
        full
        colorIndex="neutral-4-t"
        pad="small"
        justify="center"
        align="center"
      >
        <Heading margin="medium">My App</Heading>
        <LoginForm textAlign="left" />
      </Box>
    );
  }
}

export default Login;
