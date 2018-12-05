import React, { Component } from "react";
import { Router } from "@reach/router";
import { Box, Grommet } from "grommet";

import HeaderNav from "./components/header-nav/HeaderNav";
import Auth from "./components/services/Auth";
import Dashboard from "./components/dashboard/Dashboard";
import Posts from "./components/posts/Posts";
import Notes from "./components/notes/Notes";

const appName = "MyApp";

class App extends Component {
  render() {
    return (
      <Box flex full id="Site">
        <Auth>
          <Box tag="header" background="neutral-4" pad="small" fixed={false}>
            <Grommet style={{ marginRight: 15, padding: "2px 8px" }}>
              {appName}
            </Grommet>
            <HeaderNav />
          </Box>
          <Box id="Site-content" as="article" flex pad="medium">
            <main>
              <Router>
                <Dashboard path="dash" />
                <Posts path="posts" />
                <Notes path="notes/*" />
              </Router>
            </main>
          </Box>
          <Box
            as="footer"
            primary
            background="neutral-4"
            direction="column"
            pad="medium"
          >
            {appName}
          </Box>
        </Auth>
      </Box>
    );
  }
}

export default App;
