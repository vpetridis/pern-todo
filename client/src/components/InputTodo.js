import React, { Fragment, useState } from "react";
import { Toast } from "react-bootstrap";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (description === "") {
      toggleShowA();
      console.log("no input");
    } else
      try {
        const body = { description };
        const response = await fetch("http://localhost:5000/todos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        window.location = "/";
      } catch (err) {
        console.error(err.message);
      }
  };

  const handelInput = (e) => {
    const { value } = e.target;
    setDescription(value);
  };

  return (
    <Fragment>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control mr-1"
          value={description}
          onChange={handelInput}
        />
        <button className="btn btn-success">Add</button>
      </form>
      <Toast
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "absolute",
          minHeight: "100px",
        display: 'block'}}
        
        show={showA}
        onClose={toggleShowA}
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
      </Toast>
    </Fragment>
  );
};

export default InputTodo;
