import React from "react";
import "./Card.css";
import { Paper } from "./Paper/Paper";
import { ColorForm } from "./Form/ColorForm";
import { Title } from "./Title/Title";

export class ColorCard extends React.Component {
  state = { colorSelected: "" };

  setColor = color => {
    console.log(color);
    this.setState({ colorSelected: color });
  };

  render() {
    return (
      <div className={"main"}>
        <div className={"cardConteiner"}>
          <Paper>
            <Title color={this.state.colorSelected} />
            <ColorForm passToParent={this.setColor} />
          </Paper>
        </div>
      </div>
    );
  }
}
