import React, { Fragment } from "react";
import { InfoSection } from "../InfoSection/InfoSection"
import { InteractiveSection } from "../InteractiveSection/InteractiveSection"
import "./Main.css"

export class Main extends React.Component {
    state = {
      heroSelected: {name: "No Hero Selected :c", description: "sdasdaa", real_name:"qerq", role:{name:"..."}, health: 0, armour: 0, age: 23, affiliation: "to you", base_of_operations: "your <3" }
    };
    setHero = hero => {
      this.setState({ heroSelected: hero });
    };
    

    render() {
      const renderContent = [
      
      ];
      return (
        <Fragment >
          <h2 className="MainElem__Title" >Overwatch Heroes</h2>
          <div className= "MainElem">
            <InfoSection hero={this.state.heroSelected} />,
            <InteractiveSection key={this.state.heroSelected.id} passToParent={this.setHero} hero={this.state.heroSelected} />
          </div>
          
        </Fragment>
      );
    }
  }
