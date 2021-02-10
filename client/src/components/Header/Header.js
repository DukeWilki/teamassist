import React from "react";
import logo from "./maialogo.webp";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  // Render Login form
  return (
    <header className="App-header">
      <Link to="/">
        <img
          src={logo}
          className="App-logo"
          alt="Maia Outrigger Canoe Club logo"
        />
      </Link>
    </header>
  );
}

export default Header;
