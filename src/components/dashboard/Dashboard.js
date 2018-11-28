import React, { Component } from "react";

import UserInfo from "./user-info/UserInfo";

class Dashboard extends Component {
  render() {
    return (
      <section>
        <h2>Dashboard</h2>
        <UserInfo />
      </section>
    );
  }
}

export default Dashboard;
