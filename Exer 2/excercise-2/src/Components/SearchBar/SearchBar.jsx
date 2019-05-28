import React from "react";
import "./SearchBar.css"

export class SearchBar extends React.Component {
    state = {
        searchName: ""
    };
    
    handleSearchChange = (event) => {
        this.props.passToParent(event.target.value);
        this.setState({searchName: event.target.value});
    };

    render(){

        return(
            <div >
                <input
                    className= "SearchBar"
                    type= "search"
                    placeholder="Search Hero..."
                    onChange={(event) =>this.handleSearchChange(event)}
                />
            </div>
        );
    }
}