import React, { Component } from "react";
import { Router } from "@reach/router";
import NewNote from "./NewNote";
import NotesList from "./NotesList";

class Notes extends Component {
  render() {
    return (
      <section>
        <Router>
          <NotesList path="/" />
          <NewNote path="create" />
        </Router>
      </section>
    );
  }
}

export default Notes;
