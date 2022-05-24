import React, { Component } from "react";
import "./NavBar.css";
class NavBar extends Component {
  render() {
    return (
      <>
        <div class="navbar">
          <div class="header">
            <a class="anchor" href="#home">
              Western Working World
            </a>
          </div>
          <div class="navlinks">
            <a class="anchor" href="#charges">
              Charges
            </a>
            <a class="anchor" href="#about">
              About
            </a>
            <a class="anchor" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
