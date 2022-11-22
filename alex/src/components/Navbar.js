import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div class="navbar">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/resume">Resume</a>
      <div class="dropdown">
        <button class="dropbtn">
          Media
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="/photos">Photos</a>
          <a href="/videos">Videos</a>
        </div>
      </div>
      <a href="/contact">Contact</a>
    </div>
  );
};

export default Navbar;
