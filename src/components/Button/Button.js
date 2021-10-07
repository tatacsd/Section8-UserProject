import React from "react";
import css from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={css.button} type={"submit"} onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default Button;
