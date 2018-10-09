import React, { Component } from "react";
import Header from "grommet/components/Header";
import Article from "grommet/components/Article";
import Menu from "grommet/components/Menu";
import Grommet from "grommet/components/Grommet";
import Footer from "grommet/components/Footer";
import Section from "grommet/components/Section";
import Box from "grommet/components/Box";

import Link from "./components/common/Link";

const appName = "MyApp";

class App extends Component {
  render() {
    return (
      <Box flex full>
        <Header colorIndex="neutral-4-t" pad="small" fixed={false}>
          <Grommet style={{ marginRight: 15, padding: "2px 8px" }}>
            {appName}
          </Grommet>
          <Menu direction="row">
            <Link to="/header">Header</Link>
            <Link to="/">Logout</Link>
          </Menu>
        </Header>
        <Article >
          <main>
            <Section>My Section</Section>
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
      </Box>
    );
  }
}

export default App;
