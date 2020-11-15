import React, { Component, useState } from "react";
import { Button } from "reactstrap";
import { Modal } from "react-bootstrap";

const EditTodo = ({ todos }) => {
  const [modalShow, setModalShow] = useState(false);
  const MyVerticallyCenteredModal = (props) => {
    const [description, setDescription] = useState();

    const updateTodo = (id) => {
      const response = fetch(`http:\\localhost:5000\todo${id}`, {
        method: "PUT",
      });
      setDescription(response);
    };

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
            <input type="text" className="form-control" />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="primary" onClick={() => updateTodo}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  //const [todo, setTodo] = useState(todos.todo);
  // const multiFunc = () => {
  //   setTodo({ todo: todos.todo });
  //   setModalShow(true);
  // };

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
