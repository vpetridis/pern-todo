import React, { useState } from "react";
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
    const [description, setDescription] = useState(todos.description);
    const [color, setColor] = useState(" ");

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
    /*  const ChooseColor = (props) => {
      const changeColor = (e) => {
        const color = e;
        setColor({ color: color });
        // console.log({ color });
      };
      const [dropdownOpen, setDropdownOpen] = useState(false);

      const toggle = () => setDropdownOpen((prevState) => !prevState);
      const todo_id = props.colorId;
      console.log(todo_id);

      function updateColor() {
        try {
          const color = "success";
          console.log(color);
          const response = fetch(`http://localhost:5000/todos/${todo_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(color),
          });

          window.location = "/";
        } catch (error) {
          console.error(error);
        }
      }

      return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle
            style={{ position: "relative", bottom: "-5px" }}
            color="primary"
            caret
          >
            Color
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => changeColor("success")}>
              Done
            </DropdownItem>
            <DropdownItem onClick={() => changeColor("warning ")}>
              Due
            </DropdownItem>
            <DropdownItem onClick={() => changeColor("danger")}>
              Important
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      );
    }; */

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
