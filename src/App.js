import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/CardList/CardList";
import SearchBox from "./components/Search/SearchBox";

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
    const { monsters, searchValue } = this.state;
    const filteredData = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue.toLowerCase()));

    return (
      <div className="App">
        <SearchBox handleSearchValueChange={this.handleSearchValueChange} placeholder={'Search monster'}/>
        <CardList monsters = { filteredData }/>
      </div>
    );
  }
}

export default App;
