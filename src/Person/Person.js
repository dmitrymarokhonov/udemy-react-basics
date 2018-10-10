import React from "react";
import { Input, Person } from "../App.style";

const person = props => {
  return (
    <Person>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <Input type="text" onChange={props.changed} value={props.name} />
    </Person>
  );
};

export default person;
