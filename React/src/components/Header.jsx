import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Login from "../pages/Login";
import News from "../news/News";
import LINEWS from "../images/LINEWS.png";
import IT from "../images/italy_flags_flag_17018.png";
import USA from "../images/united_states_flags_flag_17080.png";
import UK from "../images/united_kingdom_flags_flag_17079.png";
import ESP from "../images/spain_flags_flag_17068.png";
import CAN from "../images/canada_flags_flag_16983.png";
import GER from "../images/germany_flags_flag_17001.png";
import FRA from "../images/france_flags_flag_16999.png";
import { FiLogIn } from "react-icons/fi";
import Registration from "../pages/registration";
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./style.scss";

import Business from "../pages/Business";
import Health from "../pages/Health";
import Technology from "../pages/Technology";
import Science from "../pages/Science";
import Entertainment from "../pages/Entertainment";
import Sports from "../pages/Sports";
import Impostazioni from "../pages/Impostazioni";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      lingua: "IT",
    };
  }

  cambiaLingua = (e) => {
    console.log(e);
    this.setState(() => {
      return {
        lingua: e,
      };
    });
  };

  cambiaLingua = (setting) => {
    console.log(setting);
    this.setState((state, props) => {
      return {
        ...state,
        lingua: setting.nazione,
      };
    });
  };

  render() {
    return (
      <div className="Navbar">
        <Router>
          <Navbar bg="dark" variant="dark" style={{ marginBottom: "20px" }}>
            <Link to="/">
              <Navbar.Brand href="#">
                <img src={LINEWS} style={{ width: "150px" }} />
              </Navbar.Brand>
            </Link>
            <Nav className="ml-auto">
              <Nav.Link>
                <Link className="scrollMapp" to="/sports">
                  Sports
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="scrollMapp" to="/health">
                  Health
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="scrollMapp" to="/science">
                  Science
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="scrollMapp" to="/technology">
                  Technology
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="scrollMapp" to="/entertainment">
                  Entertainment
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="scrollMapp" to="/business">
                  Business
                </Link>
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto" style={{ display: "flex" }}>
              <Nav.Link>
                <Link className="scrollMapp" to="/login">
                  <li>
                    <FiLogIn size={30} />
                  </li>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="scrollMapp" to="/registrazione">
                  <li>
                    <AiOutlineUserAdd size={30} />
                  </li>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="scrollMapp" to="/impostazioni">
                  <li>
                    <IoMdSettings size={30} />
                  </li>
                </Link> 
              </Nav.Link>
            </Nav>
          </Navbar>
          <Switch>
            <Route exact path="/">
              <News lingua={this.state.lingua} />
            </Route>
            <Route exact path="/login" component={Login} />{" "}
            <Route exact path="/business">
              <Business lingua={this.state.lingua} />
            </Route>
            <Route exact path="/health">
              <Health lingua={this.state.lingua} />
            </Route>
            <Route exact path="/technology">
              <Technology lingua={this.state.lingua} />
            </Route>
            <Route exact path="/science">
              <Science lingua={this.state.lingua} />
            </Route>
            <Route exact path="/entertainment">
              <Entertainment lingua={this.state.lingua} />
            </Route>
            <Route exact path="/sports">
              <Sports lingua={this.state.lingua} />
            </Route>
            <Route
              exact
              path="/impostazioni"
              render={(props) => (
                <Impostazioni
                  {...props}
                  lingua={this.state.lingua}
                  updateSetting={this.cambiaLingua}
                />
              )}
            />
            <Route
              exact
              path="/registrazione"
              render={(props) => (
                <Registration
                  {...props}

                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Header;
