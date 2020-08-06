import React, { Component } from "react";
import IconSecurity from "./../images/icon-security.svg";
import IconAccess from "./../images/icon-access-anywhere.svg";
import IconFile from "./../images/icon-any-file.svg";
import IconCollab from "./../images/icon-collaboration.svg";
import stay from "./../images/illustration-stay-productive.png";
import Iarrow from "./../images/icon-arrow.svg";
import "./index.scss";
class Features extends Component {
  render() {
    return (
      <div className="features">
        <div className="in-features">
          <div className="card">
            <img src={IconAccess} alt="" />
            <h3>Access your files, anywhere</h3>
            <p>
              The ability to use a smartphone, tablet, or computer to access
              your account means your files follow you everywhere
            </p>
          </div>
          <div className="card">
            <img src={IconSecurity} alt="" />
            <h3>Security you can trust </h3>
            <p>
              2-factor authentication and user-controlled encryption are just a
              couple of the security features we allow to help Secure your
              files.
            </p>
          </div>
          <div className="card">
            <img src={IconCollab} alt="" />
            <h3>Real-time collaboration</h3>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div className="card">
            <img src={IconFile} alt="" />
            <h3>Store any type of file</h3>
            <p>
              Whether you're sharing holidays photos or work documents, Fylo has
              you covered allowing for all file types to be securely stored and
              shared.
            </p>
          </div>
        </div>
        <div className="f-2">
          <div className="stay">
            <img src={stay} alt="" />
          </div>
          <div className="in-f-2">
            <h1>Stay productive,</h1>
            <h1> wherever you are</h1>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
            <a href="/">
              See how Fylo works
              <img src={Iarrow} alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Features;
