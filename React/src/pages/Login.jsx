import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { registraAction } from "../redux/actions";
import registrazioneReducer from "../redux/reducers/registrazioneReducer";
import "./Login.scss";
import Registration from "../pages/registration";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Login() {

  const [code, setCode] = React.useState();
  const [error, setError] = React.useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const url = "http://localhost:3001/login";
  const headers = { headers: { "Content-Type": "Application/Json" } };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, { email, password }, headers)
      .then((res) => {
        console.log(res);
        if(res.status === 200){
           history.push("/")
        }})
      .catch((err) => setError(err));
  };



  return (
    <div className="Login">
      <BrowserRouter>
        <Form>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              autoFocus
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <button
            type="submit"
            className="border-null bg-green-200 px-5 py-1 rounded-xl"
            onClick={handleSubmit}
          >Login</button>
          <Link className="scrollMapp" to="/registrazione">
            <li>Non hai un account? Registrati</li>
          </Link>
        </Form>
      </BrowserRouter>
    </div>
  );
}
