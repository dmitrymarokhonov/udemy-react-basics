import React, { Component } from "react";
import logo from "./logo.svg";
import Person from "./Person/Person";
import { Root, AppLogo, Button } from "./App.style";

class App extends Component {
  state = {
    persons: [
      { name: "Annika", age: 33 },
      { name: "Dima", age: 35 },
      { name: "Ilona", age: 2 }
    ]
  };

  switchNameHandler = newName => {
    this.setState({
      persons: [
        { name: "Annika", age: 34 },
        { name: newName, age: 35 },
        { name: "Ilona", age: 3 }
      ]
    });
  };

  nameChangedHandler =  (event) => {
    this.setState({
      persons: [
        { name: "Annika", age: 34 },
        { name: event.target.value, age: 35 },
        { name: "Ilona", age: 3 }
      ]
    });
  }

  render() {
    return (
      <Root>
        <p>
          <AppLogo src={logo} alt="logo" />
          <AppLogo backwards src={logo} alt="logo" />
        </p>
        <h1>Hi, I'm react APP</h1>
        <Button onClick={() => this.switchNameHandler("Dmitry!")}>switch name</Button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Dima!")} // recommended way
          changed={this.nameChangedHandler}
        />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </Root>
    );
  }
}

export default App;
