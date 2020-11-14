import React, { Component } from "react";

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
        <ul>
          {this.state.description.map((todo) => (
              <li className="Wrapper" key={todo.todo_id}>{todo.description}</li>
          ))}
        </ul>
      </div>
    );
  }
}
