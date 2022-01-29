import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const User = (props) => {
  const user = props.user;
  const [isShowing, setIsShowing] = useState(false);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleEdit = () => {
    const updatedUser = {
      name: name,
      email: email,
      id: user.id,
    };

    props.editUser(user.id, updatedUser);
    setIsShowing(false);
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <h3>{user.email}</h3>
      <Button onClick={() => setIsShowing(true)}>Edit</Button>
      <Button variant="danger" onClick={() => props.deleteUser(user.id)}>
        Delete
      </Button>

      <Modal show={isShowing} onHide={() => setIsShowing(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsShowing(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default User;