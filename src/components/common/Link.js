import React from "react";
import _ from "lodash";
import { Link as ReachLink } from "@reach/router";

const Link = props => (
  <ReachLink {..._.omit(props, "children")}>
    <span>{props.children}</span>
  </ReachLink>
);

export default Link;
