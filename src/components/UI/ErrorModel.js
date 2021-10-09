import React from "react";
import Button from "./Button";
import Card from "./Cards";
import css from "./ErrorModel.module.css";

const ErrorModel = (props) => {
  return (
    <>
      <div className={css.backdrop}>
        <Card className={css.modal}>
          <header>
            <h2>{props.title}</h2>
          </header>
          <div>
            <p>{props.message}</p>
          </div>
          <footer>
            <Button>Okay</Button>
          </footer>
        </Card>
      </div>
    </>
  );
};

export default ErrorModel;
