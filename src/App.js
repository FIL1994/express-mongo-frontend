import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "grommet/components/Header";
import Article from "grommet/components/Article";

import Grommet from "grommet/components/Grommet";
import Footer from "grommet/components/Footer";
import Box from "grommet/components/Box";

import HeaderNav from "./components/header-nav/HeaderNav";
import Auth from "./components/services/Auth";
import Dashboard from "./components/dashboard/Dashboard";
import Posts from "./components/posts/Posts";
import Notes from "./components/notes/Notes";

const appName = "MyApp";

class App extends Component {
  render() {
    return (
      <Box flex full>
        <Auth>
          <Header colorIndex="neutral-4-t" pad="small" fixed={false}>
            <Grommet style={{ marginRight: 15, padding: "2px 8px" }}>
              {appName}
            </Grommet>
            <HeaderNav />
          </Header>
          <Article flex pad="medium">
            <main>
              <Router>
                <Dashboard path="/dash" />
                <Posts path="/posts" />
                <Notes path="/notes" />
              </Router>
            </main>
          </Article>
          <Footer
            primary
            colorIndex="neutral-4-t"
            direction="column"
            pad="medium"
          >
            {appName}
          </Footer>
        </Auth>
      </Box>
    );
  }
}

export default App;
