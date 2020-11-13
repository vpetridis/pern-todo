import React, { Component } from "react";

export default class ListTodo extends Component {
  constructor() {
    super();
    this.state = { description: [] };
  }

  componentDidMount() {
    fetch(`http://localhost:5000/todos`)
      .then((res) => res.json())
      .then((result) => {console.log(result);});
  }
  render() {
    return <div>Description: {this.state.description}</div>;
  }
}
