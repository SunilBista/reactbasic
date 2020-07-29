import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CardList } from "./components/CardList/CardList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
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

  render() {
    const { monsters } = this.state;

    return (
      <div className="App">
        <CardList monsters = { monsters }/>
      </div>
    );
  }
}

export default App;
