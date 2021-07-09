import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { registraAction } from "../redux/actions";
import registrazioneReducer from "../redux/reducers/registrazioneReducer";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./Login.scss";
import { Link, BrowserRouter, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      cognome: "",
      email: "",
      categoria_preferita: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const utente = {
      nome: this.state.nome,
      cognome: this.state.cognome,
      email: this.state.email,
      categoria_preferita: this.state.categoria_preferita,
      password: this.state.password,
    };

    axios
      .post(
        "http://localhost:3001/registrazione",
        utente
      )
      .then((res)=>{
        console.log(res)
        alert('Utente registrato')
      })
      .catch((err)=>{
        console.log(err)
      })
  };

  render() {
    return (
      <div className="Login">
        <BrowserRouter>
          <div id="image">
            <div className="formR">
              <form onSubmit={this.submitHandler}>
                <div className="form-sx">
                  <div>
                    <label className="form-label">Nome</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nome"
                      onChange={this.changeHandler}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Cognome</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cognome"
                      onChange={this.changeHandler}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={this.changeHandler}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="form-label">Categoria preferita</label>
                    <input
                      type="text"
                      className="form-control"
                      name="categoria_preferita"
                      onChange={this.changeHandler}
                      required
                    />
                  </div>
                </div>

                <div className="form-dx">
                  <div>
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={this.changeHandler}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    required
                  />
                  <label className="form-check-label">
                    Accetto i termini di condizione e di privacy
                  </label>
                </div>
                <div className="buttonContainer">
                  <button type="submit" className="btn btn-primary">
                    Registrati
                  </button>
                </div>
              </form>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default Registration;
