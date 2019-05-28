import React from "react";
import "./List.css";
import { ListItem } from "./ListItem/ListItem";

export class List extends React.Component {
  state = {
    data: null
  };

  fetchUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users").then(
      response => response.json()
    );
    return res;
  };

  componentDidMount() {
    this.fetchUsers().then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div className={"mainContainer"}>
        <div className={"listContainer"}>
          {data
            ? data.map(user => <ListItem user={user} key={user.id} />)
            : "Loading..."}
        </div>
      </div>
    );
  }
}
