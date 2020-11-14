import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

export default class ListTodo extends Component {
  state = { description: [] };

  componentDidMount() {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((result) => this.setState({ description: result }));
  }
  render() {
    return (
      <div>
        {this.state.description.map((todo) => (
          <Card>
            <CardBody>
              <CardTitle tag="h5">Todo</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Todo description:{" "}
              </CardSubtitle>
              <CardText>{todo.description}</CardText>
              <Button color="warning" className="mr-4">Edit</Button>
              <Button color="danger">Delete</Button>
            </CardBody>
          </Card>
        ))}
      </div>
    );
  }
}

// <div>
//   <ul>
//     {this.state.description.map((todo) => (
//         <li className="Wrapper" key={todo.todo_id}>{todo.description}</li>
//     ))}
//   </ul>
// </div>
