import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class NewNote extends Component {
  state = {
    title: "",
    note: "",
    isSendingNote: false
  };

  onSubmit = async e => {
    e.preventDefault();
  };

  render() {
    return <div />;
  }
}

export default NewNote;
