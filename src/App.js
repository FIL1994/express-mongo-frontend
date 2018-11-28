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
      <Box flex full>
        <Auth>
          <header colorIndex="neutral-4-t" pad="small" fixed={false}>
            <Grommet style={{ marginRight: 15, padding: "2px 8px" }}>
              {appName}
            </Grommet>
            <HeaderNav />
          </header>
          <article flex pad="medium">
            <main>
              <Router>
                <Dashboard path="dash" />
                <Posts path="posts" />
                <Notes path="notes/*" />
              </Router>
            </main>
          </article>
          <footer
            primary
            colorIndex="neutral-4-t"
            direction="column"
            pad="medium"
          >
            {appName}
          </footer>
        </Auth>
      </Box>
    );
  }
}

export default App;
