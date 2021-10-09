import React from "react";
import Button from "../UI/Button";
import Card from "../UI/Cards";
import css from "./AddUser.module.css";

const AddUser = (props) => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={css.input}>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />
        <label htmlFor="age">Age (Years)</label>
        <input type="number" name="age" />
        <Button type={"submit"}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
