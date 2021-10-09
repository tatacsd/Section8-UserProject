import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Cards";
import ErrorModel from "../UI/ErrorModel";
import css from "./AddUser.module.css";

const AddUser = (props) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const AddUserHandler = (event) => {
    event.preventDefault();

    if (user.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Username is required",
      });
      return;
    }

    if (age.trim().length === 0 || +age < 1) {
      setError({
        title: "Invalid age",
        message: "Age is required and must be a number greater than 0",
      });
      return;
    }

    // Lift state up
    props.onAddUser(user, age);

    // Reset state
    setAge("");
    setUser("");
  };

  const usernameChangeHandler = (event) => {
    setUser(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
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
          <input
            type="text"
            name="username"
            value={user}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            name="age"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
