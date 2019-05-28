import React from "react";
import "./Button3D.css";

// export const Button3D = props => {
//   return (
//     <div className={"main"}>
//       <div className={"btnConteiner"}>
//         <button className="btn">Button with css</button>
//       </div>
//       <div className={"btnConteiner"}>
//         <button>Button with jsx</button>
//       </div>
//     </div>
//   );
// };

const btnStyle = {
  float: "left",
  position: "relative",
  top: 0,
  cursor: "pointer",
  background: "#b7de01",
  borderRadius: "3px",
  borderColor: "#b7de01",
  boxShadow: "0px 5px #687e00",
  margin: "0 7px 11px 0",
  color: "#687e00",
  textAlign: "center",
  fontSize: "20px",
  userSelect: "none",
  transition: "all 0.2s ease",
  lineHeight: "36px",
  width: "25%",
  height: " 50px"
};

const hoverStyle = {
  background: " #99ba01",
  boxShadow: "0px 4px #435100",
  color: "#687e00"
};

const activeStyle = {
  boxShadow: "0px 0px #717a33",
  top: "4px"
};

export class Button3D extends React.Component {
  state = {
    style: btnStyle
  };

  handleMouseOver = () => {
    return this.setState({ style: { ...btnStyle, ...hoverStyle } });
  };

  handleMouseOut = () => {
    return this.setState({ style: btnStyle });
  };

  handleMouseDown = () => {
    return this.setState({
      style: { ...btnStyle, ...hoverStyle, ...activeStyle }
    });
  };

  handleMouseUp = () => {
    return this.setState({ style: { ...btnStyle, ...hoverStyle } });
  };

  render() {
    const { style } = this.state;
    return (
      <div className={"main"}>
        <div className={"btnConteiner"}>
          <button className={"btn"}>Button with css</button>
        </div>
        <div className={"btnConteiner"}>
          <button
            style={style}
            onMouseOver={this.handleMouseOver}
            onMouseOut={this.handleMouseOut}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
          >
            Button with jsx
          </button>
        </div>
      </div>
    );
  }
}
