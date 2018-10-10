import React, { Component } from "react";
import Section from "grommet/components/Section";

import UserInfo from "./user-info/UserInfo";

class Dashboard extends Component {
  render() {
    return (
      <Section>
        <h2>Dashboard</h2>
        <UserInfo />
      </Section>
    );
  }
}

export default Dashboard;
