import React from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "./Button";
import Card from "./Cards";
import css from "./ErrorModel.module.css";

const ErrorModel = (props) => {
  return (
    <Wrapper>
      <div className={css.backdrop} onClick={props.onClick}>
        <Card className={css.modal}>
          <header>
            <h2>{props.title}</h2>
          </header>
          <div>
            <p>{props.message}</p>
          </div>
          <footer>
            <Button onClick={props.onClick}>Okay</Button>
          </footer>
        </Card>
      </div>
    </Wrapper>
  );
};

export default ErrorModel;
