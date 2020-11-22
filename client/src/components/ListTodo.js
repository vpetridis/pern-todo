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
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Button } from "react-bootstrap";

import EditTodo from "./EditTodo";

const ListTodos = () => {
  const [todo, setTodos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [color, setColor] = useState("");

  //TODO - CREATE TABLE COLUMN OF COLORS AND SAVE IT WITH POST.

  const ChooseColor = (props) => {
    const changeColor = (e) => {
      const color = e;
      setColor({ color: color });
      // console.log({ color });
    };
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const todo_id = props.colorId;
    console.log(todo_id);
    
    function updateColor() {
      try {
        const color = "success";
        console.log(color);
        const response = fetch(`http://localhost:5000/todos/${todo_id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(color),
        });

        window.location = "/";
      } catch (error) {
        console.error(error);
      }
    }

    return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle
          style={{ position: "relative", bottom: "-5px" }}
          color="primary"
          caret
        >
          Color
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => changeColor("success")}>
            Done
          </DropdownItem>
          <DropdownItem onClick={() => changeColor("warning ")}>
            Due
          </DropdownItem>
          <DropdownItem onClick={() => changeColor("danger")}>
            Important
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
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
              <Card body color={color.color} className="m-1" key={todo.todo_id}>
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
                    <ChooseColor colorId={todo.todo_id} />
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
