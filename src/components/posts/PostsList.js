import React, { Component, Fragment } from "react";
import axios from "axios";
import Avatar from "react-avatar";
import { formatDistance } from "date-fns/esm";

import { parseDate } from "../../helpers/dates";

const Card = props => <div>{props.children}</div>;

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
          <div>
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
                  </div>
                  <div>
                    <p>{post.content}</p>
                  </div>
                  <div>
                    {formatDistance(parseDate(post.createdAt), new Date(), {
                      addSuffix: true,
                      includeSeconds: true
                    })}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Fragment>
    );
  }
}

export default PostsList;
