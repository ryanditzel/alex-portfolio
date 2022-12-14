import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/resume">Resume</a>
      <div className="dropdown">
        <button className="dropbtn">
          Media
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="/photos">Photos</a>
          <a href="/videos">Videos</a>
        </div>
      </div>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default Navbar;
