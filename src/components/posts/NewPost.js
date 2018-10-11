import React, { Component } from "react";
import axios from "axios";

class NewPost extends Component {
  state = {
    post: ""
  };

  onChange = event => {
    this.setState({ post: event.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    
    axios.post(process.env.REACT_APP_API_URL + "posts", {
      content: this.state.post
    });
  };

  render() {
    return (
      <form style={{ marginBottom: 15 }} onSubmit={this.onSubmit}>
        <textarea
          placeholder="Write a post..."
          name="post"
          onChange={this.onChange}
          value={this.state.post}
        />
        <br />
        <button>Create Post</button>
      </form>
    );
  }
}

export default NewPost;
