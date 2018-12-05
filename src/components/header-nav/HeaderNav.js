import React from "react";
import PropTypes from "prop-types";
import { injectState } from "freactal";
import { navigate } from "@reach/router";
import { Anchor } from "grommet";

import Link from "../common/Link";

const HeaderNav = props => (
  <menu>
    <span
      style={{
        marginRight: "1rem",
        fontFamily: "Work Sans",
        background: "white",
        color: "black",
        padding: "0.2rem 0.4rem"
      }}
    >
      {props.appName}
    </span>
    <Link to="/dash">Dashboard</Link>
    <Link to="/posts">Posts</Link>
    <Link to="/notes">Notes</Link>
    <a
      href="#"
      onClick={() => {
        props.effects.onLogout();
        navigate("/");
      }}
    >
      Logout
    </a>
  </menu>
);

HeaderNav.propTypes = {
  appName: PropTypes.node.isRequired
};

export default injectState(HeaderNav);
