import React from "react";
import "./ColorForm.css";

export class ColorForm extends React.Component {
  state = {
    color: ""
  };

  handleColorChange = e => {
    this.props.passToParent(e.target.value);
    this.setState({ color: e.target.value });
  };

  render() {
    const { color } = this.state;
    return (
      <form className={"form"}>
        <label htmlFor="color">
          <h2>Color:</h2>
        </label>
        <input
          type="color"
          onChange={this.handleColorChange}
          name="color"
          value={color}
        />
        <label>
          <h2>HEX:</h2>
        </label>
        <h3 style={{ color }}>{color}</h3>
      </form>
    );
  }
}
