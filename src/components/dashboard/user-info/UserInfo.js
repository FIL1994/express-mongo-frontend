import React from "react";
import { injectState } from "freactal";

import { parseDate } from "../../../helpers/dates";

const UserInfo = props => {
  const { user } = props.state;

  return (
    <section>
      {user.username}
      <br />
      {user.fullName}
      <br />
      {user.id}
      <br />
      CREATED AT: {user.createdAt}
      <br />
      {user.createdAt && parseDate(user.createdAt).toLocaleString()}
    </section>
  );
};

export default injectState(UserInfo);
