import React, { Fragment } from "react";
import "./App.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import ListTodos from "./components/ListTodo";

//components
import { Container, Col, Row } from "react-bootstrap";
import Grid from "./components/Grid";
import InputTodo from "./components/InputTodo";

//TODO UNCOMMENT LISTODO!
function App() {
  return (
    <Fragment>
      <h1 className="m-4 text-center">SIMPLE TODO</h1>
      <h4 className="text-center">app by Vasiles Petrides</h4>
      <Container className="justify-content-center">
      <Col>
        <InputTodo />
      </Col>
        <Col>
          <ListTodos />{" "}
        </Col>
      </Container>
    </Fragment>
  );
}

export default App;
