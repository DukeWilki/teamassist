import React from "react";
import logo from "./logo.png";
import "./Footer.css";

function Footer() {
  // Render Login form
  return (
    <footer className="App-footer">
      <p className="Para-footer">Maia OCC committee app is powered by</p>
      <img src={logo} className="Teamassist-logo" alt="logo" />
    </footer>
  );
}

export default Footer;
