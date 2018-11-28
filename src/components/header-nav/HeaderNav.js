import React from "react";
import { injectState } from "freactal";
import { navigate } from "@reach/router";
import { Anchor } from "grommet";

import Link from "../common/Link";

const HeaderNav = props => (
  <menu>
    <Link to="/dash">Dashboard</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/notes">Notes</Link>
    <Anchor
      onClick={() => {
        console.log("props", props);
        props.effects.onLogout();
        navigate("/");
      }}
    >
      Logout
    </Anchor>
  </menu>
);

export default injectState(HeaderNav);
