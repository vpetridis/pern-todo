import React, { Fragment } from "react";
import "./App.css";
import EditTodo from "./components/EditTodo";
import ListTodos from "./components/ListTodo";

//components
import { Container, Col, Row } from "react-bootstrap";

import InputTodo from "./components/InputTodo";

//TODO UNCOMMENT LISTODO!
function App() {
  return (
    <Fragment>
      <h1 className="m-4 text-center">SIMPLE TODO</h1>
      <h4 className="text-center">app by Vasiles Petrides</h4>
      <Container className="m-5 justify-content-center">
          <Col>
            {" "}
            <InputTodo />
          </Col>{" "}

        <Col className="align-self-center">
          <ListTodos />{" "}
        </Col>
      </Container>
    </Fragment>
  );
}

export default App;
