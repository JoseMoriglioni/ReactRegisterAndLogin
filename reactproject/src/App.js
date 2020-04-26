import React, { Component } from "react";
import "./App.css";
import ValidationRegister from "./components/ValidationRegister";
import ValidationLogin from "./components/ValidationLogin";

class App extends Component {

  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
        <ValidationLogin />
      </div>
    );
  }

}

export default App;

