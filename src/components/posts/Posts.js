import React, { Component } from "react";
import Section from "grommet/components/Section";
import NewPost from "./NewPost";
import PostsList from "./PostsList";

class Posts extends Component {
  render() {
    return (
      <Section>
        <h2>Posts</h2>
        <NewPost />
        <PostsList />
      </Section>
    );
  }
}

export default Posts;
