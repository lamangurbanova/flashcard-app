import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/components/navbar.css";

function Navbar() {
  return (
    <header>
      <div className="container p-0">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img
                src="https://play-lh.googleusercontent.com/RZGUOE64sXvT1jcLiwyIoNysvRbnteGGg9UQHdyiVnWKmro5MOB1m6zy8TeRpMksFc4"
                alt=""
              />
            </Link>
          </div>
          <div className="options">
            <Link to="/">Home</Link>
            <Link to="/cards">Cards</Link>
            <Link to="/contactpage">Contact Me</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
