import React from "react";
import "./SimpleForm.css";

export class SimpleForm extends React.Component {
  state = {
        title: "",
        content: ""
      };
  /** create a function to handle the onChange event of the title */
  handleTextChange = e => {
    this.setState({ title: e.target.value})
  }

  /** create a function to handle the onChange event of the content*/

  render() {
    return (
      <div className={"mainContainer"}>
        <div className={"formContainer"}>
          <form className={"form"}>
            <label htmlFor="title">
              <h2>Title:</h2>
            </label>
            {/* Create an input element of type text with an onChange event */}
              <input onChange={this.state.handleTextChange} />
            <label htmlFor="post">
              <h2>Content:</h2>
            </label>
            {/* Create an textarea element of with an onChange event */}
              <textarea />
            <hr />

            <label>
              <h2>Outcome:</h2>
            </label>
            <h1>
              {
                /**Print the state for title here if it's not empty else print [Title] */ "[Title]"
              }
            </h1>
            <p>
              {
                /**Print the state for contet here if it's not empty else print [Content] */ "[Content]"
              }
            </p>
          </form>
        </div>
      </div>
    );
  }
}
