import React, { Fragment, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    const notify = () => toast("You need to add a description!");
    {
      <div>
        <button onClick={notify}>Notify !</button>
      </div>;
    }
    e.preventDefault();
    if (description === "") {
      console.log("no input");
      notify();
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
      <ToastContainer />
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

// const ToasterAlert = () => {
//   <Toast
//     aria-live="polite"
//     aria-atomic="true"
//     style={{
//       position: "absolute",
//       minHeight: "100px",
//       display: "block",
//     }}
//     show={showA}
//     onClose={toggleShowA}
//   >
//     <Toast.Header>
//       <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
//       <strong className="mr-auto">Bootstrap</strong>
//       <small>11 mins ago</small>
//     </Toast.Header>
//     <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
//   </Toast>;
// };
