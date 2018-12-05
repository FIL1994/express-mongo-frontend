import React, { Component } from "react";
import NewPost from "./NewPost";
import PostsList from "./PostsList";

class Posts extends Component {
  render() {
    return (
      <section>
        <h2>Posts</h2>
        <NewPost onNewPost={() => this.postList.getPosts(true)} />
        <PostsList ref={postList => (this.postList = postList)} />
      </section>
    );
  }
}

export default Posts;
