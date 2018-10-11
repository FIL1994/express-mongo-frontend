import React, { Component } from "react";
import axios from "axios";
import Section from "grommet/components/Section";
import Card from "grommet/components/Card";
import Columns from "grommet/components/Columns";

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
        {this.state.posts.length > 0 && (
          <Columns responsive>
            {this.state.posts.map(post => (
              <Card
                key={post._id}
                heading={post.title}
                description={post.content}
                textSize="small"
              />
            ))}
          </Columns>
        )}
      </Section>
    );
  }
}

export default Posts;
