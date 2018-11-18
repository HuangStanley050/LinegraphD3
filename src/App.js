import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { connect } from "react-redux";
import Header from "./components/header";
import Activities from "./components/activities";
import Chart from "./components/chart";
import Form from "./components/form";
import Auth from "./components/auth";

class App extends Component {
  render() {
    let content = null;
    if (this.props.authStatus) {
      content = (
        <div className="container section">
        <div className="row">
          <Activities/>
          <Chart/>
        </div>
        <Form/>
        </div>
      );
    }
    else {
      content = <Auth/>;
    }
    return (
      <div>
      <Header/>
      {content}
      {/*<div className="container section">
        <div className="row">
          <Activities/>
          <Chart/>
        </div>
        <Form/>
      </div>*/}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authStatus: state.auth.authStatus

  };
};

export default connect(mapStateToProps)(App);
