import React from "react";
import { createGlobalStyle } from "styled-components";
import { Component } from "react";

interface IState {
  counter: number;
}
class App extends Component<{}, IState> {
  state = {
    counter: 0
  };
  render() {
    const { counter } = this.state;
    return (
      <div>
        {counter}
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
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
