import React, { Component, Fragment } from "react";
import axios from "axios";
import Card from "grommet/components/Card";
import Columns from "grommet/components/Columns";
import Avatar from "react-avatar";

import { parseDate } from "../../helpers/dates";

class NotesList extends Component {
  state = {
    notes: []
  };
}

export default NotesList;
