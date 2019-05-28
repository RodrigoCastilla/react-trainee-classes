import React from "react";
import { ListElement } from "./ListElement/ListElement"
import "./List.css"

export class List extends React.Component {
  state = {
    hero: null,
    searchName:""
  };

  fetchAllData = async (heroID = "") => {
    const res = await fetch(`https://overwatch-api.net/api/v1/hero/${heroID}`)
      .then(response => response.json());
    return res;
  }
  setHero = async (heroSelectedID)=> {
    let heroSelected = await this.fetchAllData(heroSelectedID);
    
    this.props.passToParent(heroSelected);
  };

  searchHeroByName = () => {
    let heroListElemns= [];
    if(this.state.searchName !== "" )
        heroListElemns= this.state.hero.data.filter(
          heroElement => (heroElement.name.toUpperCase())
          .search((this.props.searchName).toUpperCase())!= -1
          );
    return heroListElemns;
  }

  heroListButtons = () => {
    let heroList;
    if (this.state.hero != null && !heroList) {
      const heroListElemns= this.searchHeroByName();
      
      heroList = heroListElemns.map(elem => 
        <ListElement  key={elem.id} hero={elem} passToParent={this.setHero} /> 
        );
    }
    return heroList;
  }
  

  async componentDidMount() {
     this.fetchAllData().then(data => this.setState({ hero: data}));
     this.setState({searchName: this.props.search});

  }

  render() {
    const heroList = this.heroListButtons();
    return (
      <div>
        <div className="List">
            {heroList}
        </div>
      </div>
        );
  }
}
