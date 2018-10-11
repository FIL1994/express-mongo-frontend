import React, { Component } from "react";
import Section from "grommet/components/Section";
import NewPost from "./NewPost";
import PostsList from "./PostsList";

class Posts extends Component {
  render() {
    return (
      <Section>
        <h2>Posts</h2>
        <NewPost onNewPost={() => this.postList.getPosts(true)} />
        <PostsList ref={postList => (this.postList = postList)} />
      </Section>
    );
  }
}

export default Posts;
