import React, { Component, useState } from "react";
import { Button } from "reactstrap";
import { Modal } from "react-bootstrap";

const EditTodo = ({ todos }) => {
  const [modalShow, setModalShow] = useState(false);
  
  const MyVerticallyCenteredModal = (props) => {
    const [description, setDescription] = useState(todos.description);
    function updateTodo(id) {
      try {
        const body = { description };
        const response = fetch(`http://localhost:5000/todos/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
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
          <Modal.Title id="contained-modal-title-vcenter">Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="m-4">
            <input
              type="text"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="primary" onClick={()=>updateTodo(todos.todo_id)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  return (
    <>
      <Button
        className="mr-2"
        color="warning"
        onClick={() => setModalShow(true)}
      >
        Edit{" "}
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default EditTodo;
