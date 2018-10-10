import React from "react";
import { injectState } from "freactal";
import Section from "grommet/components/Section";

import { formatDate } from "../../../helpers/dates";

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
      {user.createdAt && formatDate(user.createdAt)}
    </Section>
  );
};

export default injectState(UserInfo);
