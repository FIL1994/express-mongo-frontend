import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

class NewPost extends Component {
  state = {
    post: "",
    isSendingPost: false
  };

  onChange = event => {
    this.setState({ post: event.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    this.setState({ isSendingPost: true });

    await axios.post(process.env.REACT_APP_API_URL + "posts", {
      content: this.state.post
    });

    this.props.onNewPost();
    this.setState({ isSendingPost: false });
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
        <button>
          Create Post
          {this.state.isSendingPost && "..."}
        </button>
      </form>
    );
  }
}

NewPost.defaultProps = {
  onNewPost: () => {}
};

NewPost.propTypes = {
  onNewPost: PropTypes.func
};

export default NewPost;
