import React from "react";
import User from "./UsersL";

const UserList = (props) => {
  return (
    <div>
      {props.users.map((user, index) => {
        return (
          <User
            key={index}
            user={user}
            deleteUser={props.deleteUser}
            editUser={props.editUser}
          />
        );
      })}
    </div>
  );
};

export default UserList;