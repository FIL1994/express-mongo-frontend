import React, { Component } from "react";
import axios from "axios";
import Card from "grommet/components/Card";
import Columns from "grommet/components/Columns";

class PostsList extends Component {
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
      this.state.posts.length > 0 && (
        <Columns maxCount={1} justify="start" responsive>
          {this.state.posts.map(post => (
            <Card
              style={{
                margin: 5
              }}
              colorIndex="light-2"
              key={post._id}
              description={post.content}
              textSize="small"
              pad="small"
            />
          ))}
        </Columns>
      )
    );
  }
}

export default PostsList;
