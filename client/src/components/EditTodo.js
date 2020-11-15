import React, { Component, useState } from "react";
import { Button } from "reactstrap";
import { Modal } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  const [description, setDescription] = useState(props.datafromParent);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="m-4">
          <input type="text" className="form-control" />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button color="primary" onClick={props.onHide}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function EditTodo() {


  const [modalShow, setModalShow] = React.useState(false);
  
  const multiFunc = ()=> {
    setModalShow(true);
    saveData();
  }
          const saveData = () => {
           // this.props.updateDescription("FROM SAVE BUTTON!!!!!");
          };
  return (
    <>
      <Button
        className="mr-2"
        color="warning"
        onClick={multiFunc}
      >
        Edit{" "}
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default EditTodo;
