import React, { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Cards";
import ErrorModel from "../UI/ErrorModel";
import css from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredUsername.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Username is required",
      });
      return;
    }

    if (enteredAge.trim().length === 0 || +enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Age is required and must be a number greater than 0",
      });
      return;
    }

    // Lift state up
    props.onAddUser(enteredUsername, enteredAge);

    // Reset the fields to empty
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModel
          onClick={errorHandler}
          title={`${error.title}`}
          message={`${error.message}`}
        />
      )}
      <Card className={css.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" name="username" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" name="age" ref={ageInputRef} />
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
