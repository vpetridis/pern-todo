import React, { useState } from "react";
import { ColorInput } from "./InputTodo";
import { Modal, Button } from "react-bootstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
const EditTodo = ({ todos }) => {
  const [modalShow, setModalShow] = useState(false);

  const MyVerticallyCenteredModal = (props) => {
    const [color, setColor] = useState("");
    const [description, setDescription] = useState(todos.description);
    const todo = {
      description: `${description}`,
      colors: `${color}`,
    };
    function updateTodo(id) {
      try {
        const response = fetch(`http://localhost:5000/todos/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(todo),
        });
        console.log(todos.todo_id);

        window.location = "/";
      } catch (error) {
        console.error(error);
      }
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Save</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="m-4">
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {/*             <ChooseColor colorId={todo.todo_id} />
             */}{" "}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-success"
            onClick={() => updateTodo(todos.todo_id)}
          >
            Save
          </Button>
          <ColorInput getId={todos.todo_id} />
        </Modal.Footer>
      </Modal>
    );
  };
  return (
    <>
      <Button
        variant="warning"
        className="m-1"
        onClick={() => setModalShow(true)}
      >
        Edit
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default EditTodo;
