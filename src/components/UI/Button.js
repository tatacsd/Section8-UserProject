import React from "react";
import css from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={css.button}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
