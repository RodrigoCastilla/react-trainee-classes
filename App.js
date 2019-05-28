import React, { Fragment } from "react";

const isStranger = false;

// function App(props) {
//   const { text } = props;

//   if (isStranger) {
//     return <div>Hellow stranger</div>;
//   } else {
//     return <div>Hellow {text}</div>;
//   }
// }

class App extends React.Component {
  state = {
    isBoolean: true,
    str: "I'm"
  };

  handleOnClick = () => {
    this.setState({ str: "George" });
  };

  componentDidMount() {
    this.setState(prevState => (prevState.str = `${prevState.str} Javier`));
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.handleOnClick}>Button</button>
        <div>{this.state.str}</div>
      </Fragment>
    );
  }
}

export default App;
