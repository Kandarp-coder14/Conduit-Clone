import React from "react";
import ReactDOM, { render } from "react-dom";

export default function Setting(props) {
  return (
    <div>
      <nav>
        <div className="nav-bar">
          <a className="navbar-brand" href="#/">
            conduit
          </a>
          <ul className="nav-right ">
            <li className="nav-item">
              <a className="home" href="#/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="home" href="#login/">
                login
              </a>
            </li>
            <li className="nav-item">
              <a className="home" href="#register/">
                Sign-up
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="setting-page">
        <h1 className="head">Your Settings</h1>
        <form>
          <fieldset>
            <fieldset className="email">
              <input
                className="input"
                type="email"
                placeholder="URL of profile picture"
              />
            </fieldset>
            <fieldset className="email">
              <input className="input" type="email" placeholder="User Name " />
            </fieldset>
            <fieldset className="email">
              <textarea
                className="input setting"
                type="email"
                placeholder="Short bio about you"
              />
            </fieldset>
            <fieldset className="email">
              <input className="input" type="email" placeholder="Email" />
            </fieldset>
            <fieldset className="email">
              <input
                className="input"
                type="email"
                placeholder="New Password"
              />
            </fieldset>
          </fieldset>
          <button className="btn2">Update Setting</button>
        </form>
        <hr />
        <button className="btn3">Or click here to logout</button>
      </div>
    </div>
  );
}
