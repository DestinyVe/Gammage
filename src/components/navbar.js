import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiArrowUp } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Button } from "./button";
import "./navbar.css";

const linkStyle = {
  listStyleType: "none",
  color: "white",
  textDecoration: "none",
  fontSize: "16px",
  padding: "15px 5px",
};

export class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <IconContext.Provider value={{ color: "white" }}>
          <Link className="logo-link" to="/">
            <h1 className="navbar-logo">Grammage</h1>
          </Link>
          <div className="menu-icon" onClick={this.handleClick}>
            {this.state.clicked ? <FiArrowUp /> : <FiMenu />}
          </div>
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link className="nav-links" to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/">
                Collections
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/">
                Services
              </Link>
            </li>
            <li>
              <Link className="nav-links" to="/">
                Contact
              </Link>
              <Link className="nav-links no-btn" to="/">
                <FiShoppingCart />
              </Link>
              <Link className="nav-links-btn" to="/">
                S'inscrire
              </Link>
            </li>
          </ul>
          <Button>
            <Link to="/cart">
              <FiShoppingCart />
            </Link>
          </Button>

          <Button className="nav-btn">S'inscrire</Button>
        </IconContext.Provider>
      </nav>
    );
  }
}
