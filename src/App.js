import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import BasicExample from "./router/BasicExample";

class App extends Component {
  render() {
    return (
      <BasicExample/>
    );
  }
}

export default App;
