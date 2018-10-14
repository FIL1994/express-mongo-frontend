import React, { Component } from "react";
import { Router } from "@reach/router";
import Section from "grommet/components/Section";
import NewNote from "./NewNote";
import NotesList from "./NotesList";

class Notes extends Component {
  render() {
    return (
      <Section>
        <Router>
          <NotesList path="/" />
          <NewNote path="create" />
        </Router>
      </Section>
    );
  }
}

export default Notes;
