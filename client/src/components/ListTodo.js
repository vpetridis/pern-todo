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
      {todo.map((todo) => (
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
      ))}
    </Fragment>
  );
};

export default ListTodos;

/* export default class ListTodo extends Component {
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
  updateDescription = (childData) => {
    this.setState({ todo: childData });
    //create fetch PUT METHOD
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
              <CardTitle tag="h5">Description</CardTitle>{" "}
              <CardText>{todo.description} </CardText>
              <EditTodo updateDescription={this.updateDescription} />
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
 */
