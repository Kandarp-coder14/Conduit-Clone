import React from "react";
import ReactDOM, { render } from "react-dom";
import { IoIosSettings } from "react-icons/io";

export default function NewPost(props) {
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
                NewPost
              </a>
            </li>
            <li className="nav-item">
              <a className="home" href="#register/">
                Setting
                <IoIosSettings className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <form>
        <fieldset className="field">
          <fieldset className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Article Title"
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Whats this article about"
            />
          </fieldset>

          <fieldset className="form-group">
            <textarea
              type="text"
              className="form-control big"
              placeholder="Write your article (in markdown)"
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Tags"
            />
          </fieldset>
        </fieldset>
        <button className="btn1">Publish Article</button>
      </form>
    </div>
  );
}
