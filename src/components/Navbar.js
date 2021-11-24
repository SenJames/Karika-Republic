import React from "react";
import { Link } from "react-router-dom";
import logo from '../images/logo.png'
import Button from "./Button";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="kar">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <h3>KARIKA REPUBLIC</h3>
        </div>
        <Button title="Register" />
      </nav>
      <div className="content">
        <h2>How to Network even when you don't know what to say</h2>
        <p>A Networking Masterclass</p>
      </div>
    </>
  );
};

export default Navbar;
