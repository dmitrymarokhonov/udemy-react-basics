import React, { PureComponent } from "react";
import logo from "../assets/logo.svg";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import classes from "./App.module.scss";
import { Root, AppLogo, Button } from "./App.style";

export const AuthContext = React.createContext(false);

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[App.js] Inside constructor", props);
    this.state = {
      persons: [
        { id: "id1", name: "Annika", age: 33 },
        { id: "id2", name: "Dima", age: 35 },
        { id: "id3", name: "Ilona", age: 2 }
      ],
      showPersons: false,
      toggleClicked: 0,
      authenticated: false
    };
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[UPDATE App.js] Inside shouldComponentUpdate", nextProps, nextState);
  //   return (
  //     nextState.persons !== this.state.persons ||
  //     nextState.showPersons !== this.state.showPersons
  //   );
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE App.js] Inside componentWillUpdate()", nextProps, nextState);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "[UPDATE App.js] Inside getDerivedStateFromProps()",
      nextProps,
      prevState
    );
    return prevState;
  }

  getSnapshotBeforeUpdate() {
    console.log("[UPDATE App.js] Inside getSnapshotBeforeUpdate()");
    return null;
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentdidUpdate()");
  }

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
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
  };

  loginHandler = () => {
    this.setState({ authenticated: !this.state.authenticated });
  };

  render() {
    console.log("[App.js] Inside render()");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          // isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
      <Root>
        <p>
          <AppLogo src={logo} alt="logo" />
          <AppLogo backwards src={logo} alt="logo" />
          <img src={logo} alt="logo" className={classes.AppLogo} />
          <img src={logo} alt="logo" className={classes.AppLogoLeft} />
        </p>
        <Button
          onClick={() => {
            this.setState({ showPersons: true });
          }}
        >
          Show Persons
        </Button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHandler}
          clicked={this.togglePersondHandler}
          authenticated={this.state.authenticated}
        />
        <AuthContext.Provider value={this.state.authenticated}>
          {persons}
        </AuthContext.Provider>
      </Root>
    );
  }
}

export default App;
