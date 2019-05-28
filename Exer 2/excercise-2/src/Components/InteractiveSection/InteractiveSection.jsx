import React, { Fragment } from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { List } from "../List/List"
import "./InteractiveSection.css"

export class InteractiveSection extends React.Component {
    state = {
      heroSelected: this.props.hero,
      searchName: ""
    };
  
    handleHeroChange = e => {
      this.props.passToParent(e.target.value);
      this.setState({ color: e.target.value });
    };

    setHero = hero => {
      this.props.passToParent(hero);
      this.setState({ heroSelected: hero});
    };

    searchHero = search => {
      this.setState({searchName: search});
    };

    componentDidMount(){
      this.setState({name: "No --- Selected"});
    }
    

    render() {
      return (
        <div className= "InteractiveSection">
            <h3 className= "InteractiveSection__Title">Select a Hero</h3>
            <form onSubmit={e=>e.preventDefault()}> 
              <SearchBar passToParent={this.searchHero} hero={this.state.heroSelected} key={this.state.heroSelected.id}  />
              <List hero={this.state.heroSelected} passToParent={this.setHero} searchName={this.state.searchName} />
            </form>
        </div>
      );
    }
}
