import React, { Component } from "react";
import axios from "axios";
import Section from "grommet/components/Section";

class Posts extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const res = await axios.get(process.env.REACT_APP_API_URL + "posts");
    this.setState({
      posts: res.data
    });
  }

  render() {
    return (
      <Section>
        <h2>Posts</h2>
      </Section>
    );
  }
}

export default Posts;
