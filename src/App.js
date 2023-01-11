// import logo from './logo.svg';
import "./App.css";
import react, { Component } from "react";
import Counter from "./component/Counter"

class App extends Component {
  state = {
    h: "aslam",
    i: "muhammed",
  };
  render() {
    return (
      <div className="App">
        <h1>Hai</h1>
        <h2>
          {this.state.h} {this.state.i}
        </h2>
        <Counter />
      </div>
    );
  }
}

export default App;
