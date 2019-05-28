import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar";
// import { BgImage } from "../../Components/BgImage/BgImage";
import { Content } from "./Content";

export class  Main extends React.Component {
  render(){
    return (
      <div>
        <NavBar />
        <Content contentName ="Form"/>
      
      </div>
    );
}
};
