import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (!enteredUserName && !enteredAge) {
      console.error("add some valid inputs");
      setError({
        title: "Invalid input",
        message: "Please enter a valid name or age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    } else {
      props.onAddUser(enteredUserName, enteredAge);
      setEnteredUserName("");
      setEnteredAge("");
    }
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageNameChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <>
      {error && (
        <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message} />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            min="0"
            onChange={ageNameChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
