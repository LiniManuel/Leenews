import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { connect } from "react-redux";
import { registraAction } from "./redux/actions";
import registrazioneReducer from "./redux/reducers/registrazioneReducer";
import { Provider } from "react-redux";
import store from "./redux/store";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: this.props.loggedMapped,
      nome: this.props.nomeMapped,
      cognome: this.props.cognomeMapped,
      email: this.props.emailMapped,
      nomeUtente: this.props.nomeUtenteMapped,
      password: this.props.passwordMapped,
    };
  }
  render() {
    return (
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <div className="App">
              <Header />
            </div>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}
