import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Cockpit.module.scss";

const cockpit = props => {
  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      {/* <Button bGColor={lowamount} onClick={this.togglePersondHandler}>
        toggle persons
      </Button> */}
      <button
        className={props.persons.length <= 1 ? classes.whiteonred : classes.whiteongreen}
        onClick={props.clicked}
      >
        toggle persons
      </button>
      <button className={classes.whiteongreen} onClick={props.login}>
        {props.authenticated ? "Log out" : "Log in"}
      </button>
    </Aux>
  );
};

export default cockpit;
