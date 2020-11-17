import React, { Fragment, useState } from "react";
import { Alert } from "react-bootstrap";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(e.target.value);
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
    </Fragment>
  );
};

export default InputTodo;
