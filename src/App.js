import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addNewUser = (userName, userAge) => {

    setUsers((prevUsers) => ([...prevUsers, {name: userName, age: userAge}]));
  };

  return (
    <>
      <AddUser onAddUser={addNewUser} />
      <UserList users={users} />
    </>
  );
}

export default App;
