import React, { Component } from "react";
import Section from "grommet/components/Section";
import NewNote from "./NewNote";
import NotesList from "./NotesList";

class Notes extends Component {
  render() {
    return (
      <Section>
        <h2>Notes</h2>
        <NewNote />
        <NotesList />
      </Section>
    );
  }
}

export default Notes;
