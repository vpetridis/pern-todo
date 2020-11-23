import React, { Fragment } from "react";
import "./App.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import ListTodos from "./components/ListTodo";
//components
import { Container, Col, Row, ListGroup, ListGroupItem } from "react-bootstrap";
import InputTodo from "./components/InputTodo";

//TODO UNCOMMENT LISTODO!
function App() {
  function ListGroupIntro() {
    return (
      <ListGroup.Item variant="flush">
        <ListGroup.Item variant="primary">PostgreSQL</ListGroup.Item>
        <ListGroup.Item variant="secon dary">NodeJS</ListGroup.Item>
        <ListGroup.Item variant="success">Express</ListGroup.Item>
      </ListGroup.Item>
    );
  }
  return (
    <Fragment>
      <Container> 
        <Row>
          {" "}
          <Col lg="4">
            <div className="m-4">
              {" "}
              <h1 className=" text-center">MyTODOs</h1>
              <h4 className="text-center">responsive</h4>
              <br></br>
              <p>
                {" "}
                This is a <b>fully responsive</b> todo-app with basic CRUD
                operations. It is <b>mobile friendly</b>, in a sense that all
                the entries rearrange depending on the viewport. For this, it
                uses the Grid System from
                <a
                  href="https://react-bootstrap.github.io/layout/grid/"
                  target="_blank"
                >
                  {" "}
                  react-bootstrap
                </a>
                .
              </p>
              <p>
                The app is using{" "}
                <a
                  href="https://www.npmjs.com/package/react-toastify"
                  target="_blank"
                >
                  toastify
                </a>{" "}
                to create gentle alerts to the user. Try adding an empty todo!{" "}
                All Edit buttons implement a centered{" "}
                <a
                  href="https://react-bootstrap.netlify.app/components/modal/#modal-vertically-centered"
                  target="_blank"
                >
                  Modal
                </a>
                . All todos can be assigned a color value upon creation depending on the importance.
              </p>
              
               <h3>BACKEND</h3>
                <ListGroupIntro />
              
            </div>
          </Col>
          <Col lg="8" className="mt-5">
            {" "}
            <Col className="mb-4">
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
