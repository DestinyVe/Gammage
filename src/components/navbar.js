import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiMenu } from "react-icons/fi";

export const Navbar = () => {
  const linkStyle = {
    listStyleType: "none",
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    padding: "15px 5px",
  };

  return (
    <div
      className="navbar"
      style={{
        backgroundColor: "#222",
        padding: "5px 20px",
        fontFamily: "sans-serif",
      }}>
      <div className="logo" alt="logo">
        Grammage
      </div>
      <div className="menu">
        <Link className="item" style={linkStyle}>
          {" "}
          Accueil{" "}
        </Link>
        <Link className="item" style={linkStyle}>
          {" "}
          Collections{" "}
        </Link>
        <Link className="item" style={linkStyle}>
          {" "}
          Services{" "}
        </Link>
        <Link className="item" style={linkStyle}>
          {" "}
          A propos{" "}
        </Link>
        <Link className="item" style={linkStyle}>
          {" "}
          FAQ{" "}
        </Link>
        <Link className="item button" style={linkStyle}>
          {" "}
          Se connecter{" "}
        </Link>
        <Link className="item button secondary" style={linkStyle}>
          {" "}
          S'inscrire{" "}
        </Link>
        <Link to="/cart" style={linkStyle}>
          <FiShoppingCart />
        </Link>
        <Link className="toggel" style={linkStyle}>
          <FiMenu />
        </Link>
      </div>
    </div>
  );
};
