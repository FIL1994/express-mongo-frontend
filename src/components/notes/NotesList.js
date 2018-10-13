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

  render() {
    return (
      <Fragment>
        {this.state.notes.length > 0 && (
          <Columns maxCount={1} justify="start" responsive>
            {this.state.notes.map(note => (
              <div>
                {note.title}
                <hr />
                {note.content}
              </div>
            ))}
          </Columns>
        )}
      </Fragment>
    );
  }
}

export default NotesList;
