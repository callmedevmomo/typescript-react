import React from "react";
import { Component } from "react";
import Number from "./Number";
import { Input, Form } from "./Input";

interface IState {
  counter: number;
  name: string;
}
class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: ""
  };
  render() {
    const { counter, name } = this.state;
    return (
      <div>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange}></Input>
        </Form>
        <Number count={counter} />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
  onChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(e.target);
  };
  onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  add = () => {
    // this.setState({counter:"hello"})
    this.setState(prev => {
      return {
        counter: prev.counter + 1
      };
    });
  };
}

export default App;
