import React, { Component } from "react";
import intro from "./../images/illustration-intro.png";
import "./index.scss";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="inner-header">
          <img src={intro} alt="" />
          <h1>All your files in one secure location,</h1>
          <h1> accessible anywhere.</h1>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    );
  }
}
export default Header;
