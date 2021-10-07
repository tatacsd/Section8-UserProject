import React from "react";
import css from "./Input.module.css";
import { useState } from "react";

const Input = (props) => {
  return (
    <div className={css.input__container}>
      <label className={css.input__label}>{props.label}</label>
      <input className={css.input__input} type={props.type} />
    </div>
  );
};

export default Input;
