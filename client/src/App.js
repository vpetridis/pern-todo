import React, { Fragment } from "react";
import "./App.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import ListTodos from "./components/ListTodo";
//components
import { Container, Col, Row } from "react-bootstrap";
import InputTodo from "./components/InputTodo";

//TODO UNCOMMENT LISTODO!
function App() {
  return (
    <Fragment>
    <Container>
      <Row >
        {" "}
        <Col lg="4">
          <div className="m-4">
            {" "}
            <h1 className=" text-center">SIMPLE TODO</h1>
            <h4 className="text-center">app by Vasiles Petrides</h4>
            <br></br>
            <p > This is a  <b>fully responise</b> todo-app with basic CRUD operations.
             It is mobile friendly, in a sense that all the entries rearrange depending on the viewport. 
             The app is using <a href="https://www.npmjs.com/package/react-toastify" target="_blank">toastify</a> to create gentle alerts to the user. Try adding an empty todo! </p>
          </div>
        </Col>
        <Col lg='8' className="mt-5">
          {" "}
          
            <Col>
              <InputTodo />
            </Col>
            <Col>
              <ListTodos />{" "}
            </Col>
         
        </Col>
      </Row>
      </Container>
    </Fragment>
  );
}

export default App;
