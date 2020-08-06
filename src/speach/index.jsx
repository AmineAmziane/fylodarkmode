import React, { Component } from "react";
import prf1 from "./../images/profile-1.jpg";
import prf2 from "./../images/profile-2.jpg";
import prf3 from "./../images/profile-3.jpg";
import "./index.scss";
class Speach extends Component {
  render() {
    return (
      <div className="speach">
        <div className="inner-speach">
          <div className="card interval">
            <p>
              Fylo has improved our team productivity by an Order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.{" "}
            </p>
            <div className="profile">
              <img src={prf1} alt="" />
              <div className="profileName">
                <h4>Satich Patel</h4>
                <p>Founder & CEO.Huddle</p>
              </div>
            </div>
          </div>
          <div className="card">
            <p>
              Fylo has improved our team productivity by an Order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.{" "}
            </p>
            <div className="profile">
              <img src={prf2} alt="" />
              <div className="profileName">
                <h4>Bruce McKenzle</h4>
                <p>Founder & CEO.Huddle</p>
              </div>
            </div>
          </div>
          <div className="card">
            <p>
              Fylo has improved our team productivity by an Order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.{" "}
            </p>
            <div className="profile">
              <img src={prf3} alt="" />
              <div className="profileName">
                <h4>Iva Boyd</h4>
                <p>Founder & CEO.Huddle</p>
              </div>
            </div>
          </div>
        </div>
        <div className="access">
          <h1>Get early access today</h1>
          <p>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions. our support team
            would be happy to help you.
          </p>
          <input type="text" placeholder="email@example.com" />
          <button>Get Started For Free</button>
        </div>
      </div>
    );
  }
}
export default Speach;
