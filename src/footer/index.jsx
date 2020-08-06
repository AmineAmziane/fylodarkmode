import React, { Component } from "react";
import logo from "./../images/logo.svg";
import phone from "./../images/icon-phone.svg";
import email from "./../images/icon-email.svg";
import location from "./../images/icon-location.svg";
import "./index.scss";
class Features extends Component {
  render() {
    return (
      <div className="footer">
        <img src={logo} alt="" />
        <div className="inner-footer">
          <div className="ft-1">
            <div className="address">
              <img src={location} alt="" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="ft-2">
            <div className="phone">
              <img src={phone} alt="" />
              <p>+1-543-123-4567</p>
            </div>
            <div className="email">
              <img src={email} alt="" />
              <p>example@fylo.com</p>
            </div>
          </div>
          <div className="ft-3">
            <ul>
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Job</a>
              </li>
              <li>
                <a href="/">Press</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
            </ul>
          </div>
          <div className="ft-4">
            <ul>
              <li>
                <a href="/">Contact Us</a>
              </li>
              <li>
                <a href="/">Terms</a>
              </li>
              <li>
                <a href="/">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="ft-5">
            <ul>
              <li>
                <a href="/">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Features;
