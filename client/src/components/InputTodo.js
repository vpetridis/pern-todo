import React, { Fragment, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

let colorG;
const ColorInput = (props) => {
  const [color, setColor] = useState("");
  colorG = color;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleSuccess = (e) => {
    setColor("success");
  };
  const handleImportant = (e) => {
    setColor("warning");
  };
  const handleOverdue = (e) => {
    setColor("danger");
  };

  
  return (
    <Dropdown className="mx-2" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle outline color="primary" caret>
        Color
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={handleSuccess}>Default</DropdownItem>
        <DropdownItem onClick={handleImportant}>Important</DropdownItem>
        <DropdownItem onClick={handleOverdue}>Overdue!</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    const notify = () =>
      toast.info("You need to add a description!", {
        position: toast.POSITION.TOP_CENTER,
      });
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
        const todo = {
          description: `${description}`,
          colors: `${colorG}`,
        };
        const response = await fetch("http://localhost:5000/todos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(todo),
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

  /* COLOR DROPDOWN */

  return (
    <Fragment>
      <ToastContainer />
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control mr-1 shadow-sm p-3 "
          value={description}
          onChange={handelInput}
        />
        <button className="btn btn-success">Add</button>
        <ColorInput />
      </form>
    </Fragment>
  );
};

export { ColorInput };
export default InputTodo;
