import React, { Component, Fragment } from "react";
import axios from "axios";
import TextInput from "grommet/components/TextInput";
import FormField from "grommet/components/FormField";
import Button from "grommet/components/Button";
import { Editor } from "slate-react";
import { Value } from "slate";

// Create our initial value...
const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "Enter a note..."
              }
            ]
          }
        ]
      }
    ]
  }
});

class NewNote extends Component {
  state = {
    title: "",
    content: initialValue,
    isSendingNote: false
  };

  isFormValid = () => {
    return this.state.title.length > 0;
  };

  onSubmit = async e => {
    e.preventDefault();
    if (!this.isFormValid) return;

    const content = JSON.stringify(this.state.content.toJSON());

    const noteResponse = await axios.post(
      process.env.REACT_APP_API_URL + "notes",
      {
        title: this.state.title,
        content
      }
    );

    console.log("note response", noteResponse);
  };

  onChange = ({ value }) => {
    this.setState({ content: value });
  };

  render() {
    return (
      <Fragment>
        <FormField label="title">
          <TextInput
            name="title"
            value={this.state.title}
            onDOMChange={e => this.setState({ title: e.target.value })}
          />
        </FormField>
        <Editor value={this.state.content} onChange={this.onChange} />
        <Button
          style={{
            marginTop: 15
          }}
          type="button"
          primary
          fill
          label="Create Note"
          onClick={this.isFormValid() ? this.onSubmit : null}
        />
      </Fragment>
    );
  }
}

export default NewNote;
