import React, { Component } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Spinner,
} from "reactstrap";

export default class ListTodo extends Component {
  state = { todo: [{ todo_id: null, description: "" }], isLoading: false };

  componentDidMount() {
    //READ THE ANSWER HERE: https://stackoverflow.com/questions/55324088/why-do-i-have-to-refresh-page-manually-after-delete
    this.setState({ isLoading: true });

    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((result) =>
        this.setState({ todo: result, isLoading: false }, console.log(result))
      );
  }
  deleteTodo = async (id) => {
    const { todo } = this.state;
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      this.setState({ todo: todo.filter((todo) => todo.todo_id !== id) });
    } catch (err) {
      console.error(err.message);
    }
  };

  render() {
    if (this.state.isLoading) {
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
      <div>
        {this.state.todo.map((todo) => (
          <Card key={todo.todo_id}>
            <CardBody>
              <Row>
                {" "}
                <Col md={4}>
                  {" "}
                  <CardTitle tag="h5">Description:</CardTitle>
                </Col> 
                <Col md={8}>
                  {" "}
                  <CardText>{todo.description} </CardText>
                </Col>
              </Row>

              <Button color="warning" className="mr-4">
                Edit
              </Button>
              <Button
                color="danger"
                onClick={() => this.deleteTodo(todo.todo_id)}
              >
                Delete
              </Button>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}
