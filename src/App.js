import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from "./components/header";
import Activities from "./components/activities";
import Chart from "./components/chart";
import Form from "./components/form";

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <div className="container section">
        <div className="row">
          <Activities/>
          <Chart/>
        </div>
        <Form/>
      </div>
      </div>
    );
  }
}

export default App;
