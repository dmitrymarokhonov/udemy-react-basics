import React, { Component } from "react";
import logo from "./logo.svg";
import classes from "./App.module.scss";
import Person from "./Person/Person";
import { Root, AppLogo, Button } from "./App.style";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

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
    let lowamount;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  changed={event => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
    }

    if (this.state.persons.length <= 2) {
      lowamount = "red";
    }

    return (
      <Root>
        <p>
          <AppLogo src={logo} alt="logo" />
          <AppLogo backwards src={logo} alt="logo" />
        </p>
        <h1>Hi, I&#39;m react APP</h1>
        <Button bGColor={lowamount} onClick={this.togglePersondHandler}>
          toggle persons
        </Button>
        <button
          className={
            this.state.persons.length <= 1 ? classes.whiteonred : classes.whiteongreen
          }
          onClick={this.togglePersondHandler}
        >
          toggle persons
        </button>
        {persons}
      </Root>
    );
  }
}

export default App;
