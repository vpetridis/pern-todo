import React, { useState, useEffect, Fragment } from "react";
import {
  Card,
  CardText,
  Container,
  Row,
  CardBody,
  CardTitle,
  Button,
  Spinner,
} from "reactstrap";
import EditTodo from "./EditTodo";
import TestBulma from "./TestBulma";

const ListTodos = () => {
  
  const [todo, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const deleteTodo = async (id) => {
    try {
      const respone = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todo.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.error(error);
    }
  };
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
  return (
    
    <Fragment>
    <TestBulma/>

      {todo
        .map((todo) => (
          <Card key={todo.todo_id}>
            <CardBody>
              <CardTitle tag="h5">Description</CardTitle>{" "}
              <CardText>{todo.description} </CardText>
              <EditTodo todos={todo} />
              <Button color="danger" onClick={() => deleteTodo(todo.todo_id)}>
                Delete
              </Button>
            </CardBody>
          </Card>
        ))
        .reverse()}
    </Fragment>
  );
};

export default ListTodos;
