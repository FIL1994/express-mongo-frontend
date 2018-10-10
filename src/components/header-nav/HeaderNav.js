import React from "react";
import Menu from "grommet/components/Menu";

import Link from "..//common/Link";

const HeaderNav = props => (
  <Menu direction="row">
    <Link to="/dash">Dashboard</Link>
    <Link to="/">Logout</Link>
  </Menu>
);

export default HeaderNav;
