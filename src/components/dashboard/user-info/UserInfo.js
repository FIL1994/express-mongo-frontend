import React from "react";
import { injectState } from "freactal";
import Section from "grommet/components/Section";

import { parseDate2 } from "../../../helpers/dates";

const UserInfo = props => {
  const { user } = props.state;

  return (
    <Section>
      {user.username}
      <br />
      {user.fullName}
      <br />
      {user.id}
      <br />
      CREATED AT: {user.createdAt}
      <br />
      {user.createdAt && parseDate2(user.createdAt).toLocaleString()}
    </Section>
  );
};

export default injectState(UserInfo);
