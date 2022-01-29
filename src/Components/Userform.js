import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const UserForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        let newUser = {
          name: name,
          email: email,
          id: uuid(),
        };
        props.addUser(newUser);
        setName("");
        setEmail("");
      }}
    >
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input type="submit" />
    </form>
  );
};

export default UserForm;