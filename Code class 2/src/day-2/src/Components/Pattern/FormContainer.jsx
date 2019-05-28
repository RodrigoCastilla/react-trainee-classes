import React from "react";
import "./Form.css";

export class FormContainer extends React.Component {
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
      <div className={"mainContainer"}>
        <div className={"formContainer"}>
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

            <hr />

            <label>
              <h2>Outcome:</h2>
            </label>
            <h1>{title ? title : "[Title]"}</h1>
            <p>{content ? content : "[Content]"}</p>
          </form>
        </div>
      </div>
    );
  }
}
