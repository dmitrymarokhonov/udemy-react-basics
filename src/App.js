import React, { Component } from "react";
import logo from "./logo.svg";
import Person from "./Person/Person";
import { Root, AppLogo, Button } from "./App.style";

class App extends Component {
  state = {
    persons: [
      { id: "id1", name: "Annika", age: 33 },
      { id: "id2", name: "Dima", age: 35 },
      { id: "id3", name: "Ilona", age: 2 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersondHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <Root>
        <p>
          <AppLogo src={logo} alt="logo" />
          <AppLogo backwards src={logo} alt="logo" />
        </p>
        <h1>Hi, I'm react APP</h1>
        <Button onClick={this.togglePersondHandler}>toggle persons</Button>
        {persons}
      </Root>
    );
  }
}

export default App;
