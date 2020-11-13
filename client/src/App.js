import React, { Fragment } from "react";
import "./App.css";
import EditTodo from "./components/EditTodo";
import ListTodo from "./components/ListTodo";
import BounceImage from "./components/BounceImage";

//components
import { Container, Col, Row } from "react-bootstrap";

import InputTodo from "./components/InputTodo";

function App() {
  return (
    <Fragment>
      <h1 className="text-center">Pern Todo List</h1>
      <Container fluid className="m-5 justify-content-cente">
        <Row>
          <Col>
            {" "}
            <InputTodo />
          </Col>{" "}
          <Col xs={4}>
            {" "}
            <EditTodo />
          </Col>
        </Row>
        <Col>
          <ListTodo />{" "}
        </Col>
      </Container>
    </Fragment>
  );
}

export default App;
