import React from "react";
import { injectState } from "freactal";
import { navigate } from "@reach/router";
import Menu from "grommet/components/Menu";
import Anchor from "grommet/components/Anchor";

import Link from "../common/Link";

const HeaderNav = props => (
  <Menu direction="row">
    <Link to="/dash">Dashboard</Link>
    <Link to="/posts">Posts</Link>
    <Anchor
      onClick={() => {
        console.log("props", props);
        props.effects.onLogout();
        navigate("/");
      }}
    >
      Logout
    </Anchor>
  </Menu>
);

export default injectState(HeaderNav);
