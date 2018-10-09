import React from "react";
import _ from "lodash";
import { Link as ReachLink } from "@reach/router";
import Anchor from "grommet/components/Anchor";

const Link = props => (
  <ReachLink {..._.omit(props, "children")}>
    <Anchor tag="span">{props.children}</Anchor>
  </ReachLink>
);

export default Link;
