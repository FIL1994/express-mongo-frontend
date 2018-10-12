import React, { Component, Fragment } from "react";
import axios from "axios";
import Card from "grommet/components/Card";
import Columns from "grommet/components/Columns";
import Avatar from "react-avatar";

class PostsList extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async (force = false) => {
    const config = force
      ? {
          headers: {
            "Cache-Control": "no-cache"
          }
        }
      : {};

    const res = await axios.get(
      process.env.REACT_APP_API_URL + "posts",
      config
    );
    this.setState({
      posts: res.data
    });
  };

  render() {
    return (
      <Fragment>
        <button onClick={() => this.getPosts(true)}>Refresh</button>
        {this.state.posts.length > 0 && (
          <Columns maxCount={1} justify="start" responsive>
            {this.state.posts.map(post => (
              <Card
                style={{
                  margin: 5
                }}
                colorIndex="light-2"
                key={post._id}
              >
                <div className="post">
                  <div>
                    <Avatar size={50} round name={post.author.username} />
                  </div>
                  <div>
                    <b>{post.author.username}</b>
                    <p>{post.content}</p>
                  </div>
                </div>
              </Card>
            ))}
          </Columns>
        )}
      </Fragment>
    );
  }
}

export default PostsList;
