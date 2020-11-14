import React, { Component } from "react";
import {
  Card,
  Container,
  Row,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Spinner,
} from "reactstrap";

export default class ListTodo extends Component {
  state = { todo: [{ todo_id: 0, description: "" }], isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((result) =>
        this.setState({ todo: result, isLoading: false }, console.log(result))
      );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Container>
          <Row className="centered">
            {" "}
            <Spinner color="primary" />
          </Row>
        </Container>
      );
    }
    return (
      <div>
        {this.state.todo.map((todo) => (
          <Card>
            <CardBody>
              <CardTitle tag="h5">Todo ID: {todo.todo_id}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Todo description:{" "}
              </CardSubtitle>
              <CardText>{todo.description}</CardText>
              <Button color="warning" className="mr-4">
                Edit
              </Button>
              {/* <Button color="danger" onClick={deleteMethod(todo.todo_id)}>Delete</Button> */}
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}

// // TODO - delete function
// function deleteMethod(props) {
//   const deleteTodo = {
//     method: "DELETE"};
//   fetch(`http://localhost:5000/todos/${props}`, deleteTodo)
//     .then((res) => res.json());
// }
