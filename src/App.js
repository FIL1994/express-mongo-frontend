import React from "react";
import { Router } from "@reach/router";
import { Box } from "grommet";

import HeaderNav from "./components/header-nav/HeaderNav";
import Auth from "./components/services/Auth";
import Dashboard from "./components/dashboard/Dashboard";
import Posts from "./components/posts/Posts";
import Notes from "./components/notes/Notes";

const appName = "MyApp";
const background = "#525a76";

const App = () => {
  return (
    <Box flex full id="Site">
      <Auth>
        <Box tag="header" background={background} pad="small" fixed={false}>
          <HeaderNav appName={appName} />
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
          background={background}
          pad="medium"
          align="center"
        >
          {appName}
        </Box>
      </Auth>
    </Box>
  );
};

export default App;
