import React, { Component } from "react";

export default class ListTodo extends Component {
  constructor() {
    super();
    this.state = { todo: [] };
  }

  componentDidMount() {
    fetch(`http://localhost:5000/todos`)
      .then((res) => res.json())
      .then((result) => this.setState({todo: result.description}));
  }
  render() {
    return <div>Description: {this.state.todo}</div>;
  }
}
