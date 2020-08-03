import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/CardList/CardList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchValue: ''
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          monsters: users,
        })
      );
  }
  handleSearchValueChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  }
  render() {
    const { monsters } = this.state;

    return (
      <div className="App">
        <input type="search" placeholder="Enter the name to search" onChange={this.handleSearchValueChange} />
        <CardList monsters = { monsters }/>
      </div>
    );
  }
}

export default App;
