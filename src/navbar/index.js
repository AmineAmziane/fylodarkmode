import React, { Component } from "react";
import logo from "./../images/logo.svg";
import "./index.scss";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="brandNav">
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
            <li>
              <a href="/">Sign In</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default Navbar;
