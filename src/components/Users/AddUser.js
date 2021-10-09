import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Cards";
import css from "./AddUser.module.css";

const AddUser = (props) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState(0);

  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  const usernameChangeHandler = (event) => {
    setUser(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={css.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" name="age" onChange={ageChangeHandler} />
        <Button type={"submit"}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
