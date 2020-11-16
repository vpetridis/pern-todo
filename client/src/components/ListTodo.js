import React, { useState, useEffect, Fragment } from "react";
import {
  Card,
  Col,
  CardText,
  Container,
  Row,
  Button,
  CardBody,
  CardTitle,
  Spinner,
} from "reactstrap";
import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todo, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(true);

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
      const respone = await fetch(`http://localhost:5000/todos/${id}`, {
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
  return (
    <Fragment>
      <Row>
        {" "}
        {todo
          .map((todo) => (
            <Col xs={{size: 'auto'}} key={todo.todo_id}>
              {" "}
              <Card className="m-1" key={todo.todo_id}>
                <CardBody>
                  <CardTitle tag="h5">Description</CardTitle>{" "}
                  <CardText>{todo.description} </CardText>
                  <EditTodo todos={todo} />
                  <Button
                    color="danger"
                    onClick={() => deleteTodo(todo.todo_id)}
                  >
                    Delete
                  </Button>
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
