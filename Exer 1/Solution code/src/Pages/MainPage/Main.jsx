import React, { Fragment } from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
import { Content } from "../MainPage/Content";

export class Main extends React.Component {
  state = {
    contentSelected: "Home"
  };

  handleOnClick = contentName => {
    this.setState({ contentSelected: contentName });
  };

  render() {
    const { contentSelected } = this.state;
    return (
      <Fragment>
        <NavBar handleClick={this.handleOnClick} />
        <Content component={contentSelected} />
      </Fragment>
    );
  }
}
