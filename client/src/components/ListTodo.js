import React, { useState, useEffect, Fragment } from "react";
import "../App.css";

import {
  Card,
  Col,
  CardText,
  Container,
  Row,
  CardBody,
  CardTitle,
  Spinner,
} from "reactstrap";
import { Button } from "react-bootstrap";

import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todo, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [color, setColor] = useState("");

  //TODO - CREATE TABLE COLUMN OF COLORS AND SAVE IT WITH POST.

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  };
  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todo.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  if (isLoading) {
    return (
      <Container>
        <Row className="justify-content-center">
          {" "}
          <Spinner color="primary" />
        </Row>
      </Container>
    );
  }
  const ToasterElement = React.createElement("div");

  return (
    <Fragment>
      <Row>
        {" "}
        {todo
          .map((todo) => (
            <Col xs={{ size: "auto" }} key={todo.todo_id}>
              {" "}
              {/*  NA MPEI MESA STO CARD BODY color={color.color} */}
              <Card color={todo.colors} body className="m-1" key={todo.todo_id}>
                <CardBody>
                  <CardTitle tag="h5">Description</CardTitle>{" "}
                  <CardText>{todo.description} </CardText>
                  <Row>
                    {" "}
                    <EditTodo todos={todo} />{" "}
                    <Button
                      className="m-1"
                      variant="danger"
                      onClick={() => deleteTodo(todo.todo_id)}
                    >
                      Delete
                    </Button>{" "}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          ))
          .reverse()}
      </Row>
    </Fragment>
  );
};

export default ListTodos;
