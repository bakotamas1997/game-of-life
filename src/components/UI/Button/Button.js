import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.clicked}
      disabled={props.isDisabled}
      className={classes.Button}
    >
      {props.children}
    </button>
  );
};

export default Button;
