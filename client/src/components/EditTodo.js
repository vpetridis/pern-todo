import React, { Component, useState } from "react";
import { Button } from "reactstrap";

function EditTodo() {


  function response(id) {
    return fetch(`http://localhost:5000/todos'${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
  return (
    <Button color="danger" onClick={() => this.response}>
      Edit
    </Button>
  );

}  

export default EditTodo;
