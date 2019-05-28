import React from "react";
import "./SimpleForm.css";

export class SimpleForm extends React.Component {
  state = {
    title: "",
    content: ""
  };

  handleTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  handleContentChange = e => {
    this.setState({ content: e.target.value });
  };

  render() {
    const { title, content } = this.state;
    return (
      <form className={"form"}>
        <label htmlFor="title">
          <h2>Title:</h2>
        </label>
        <input
          type="text"
          onChange={this.handleTitleChange}
          name="title"
          value={title}
        />

        <label htmlFor="post">
          <h2>Content:</h2>
        </label>
        <textarea
          name="post"
          onChange={this.handleContentChange}
          rows="5"
          value={content}
        />
      </form>
    );
  }
}
