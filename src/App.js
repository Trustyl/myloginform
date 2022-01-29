import React, { useState } from "react";
import "./App.css";
import UserForm from "./Components/Userform";
import UserList from "./Components/Userlist";
import { v4 as uuid } from "uuid";

    const App = () => {
    
      const [users, setUsers] = useState([
        { name: "Serge", email: "john@email.com", id: uuid() },
        { name: "Mary", email: "mary@email.com", id: uuid() },
      ]);
      const addUser = (newUser) => {
        
        setUsers([...users, newUser]);
      };
      const deleteUser = (id) => {
      
        const filteredUsers = users.filter((user) => {
          if (id !== user.id) return user;
        });

        setUsers(filteredUsers);
      };

      const editUser = (id, updatedUser) => {
        
        const updatedUsers = users.map((user) => {
          if (id === user.id) return updatedUser;
          else return user;
        });
        setUsers(updatedUsers);
      };
  return (
        <div>
          <UserForm addUser={addUser} />
          <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
        </div>
      );
    };

export default App;