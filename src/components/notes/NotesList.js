import React, { Component, Fragment } from "react";
import axios from "axios";
import Avatar from "react-avatar";

import Link from "../common/Link";
import { parseDate } from "../../helpers/dates";

const Card = props => <div>{props.children}</div>;

class NotesList extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    this.getNotes();
  }

  getNotes = async () => {
    const res = await axios.get(process.env.REACT_APP_API_URL + "notes");

    this.setState({
      notes: res.data
    });
  };

  render() {
    return (
      <Fragment>
        <div style={{ marginBottom: 30 }}>
          <Link to="create">Create Note</Link>
        </div>
        {this.state.notes.length > 0 && (
          <div>
            {this.state.notes.map(note => (
              <div key={note._id}>
                {note.title}
                <hr />
                {note.content}
              </div>
            ))}
          </div>
        )}
      </Fragment>
    );
  }
}

export default NotesList;
