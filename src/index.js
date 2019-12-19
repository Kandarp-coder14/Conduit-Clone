import React from "react";
import ReactDOM from "react-dom";

import "./main.css";
import "../src/components/sign_in";
import SignIn from "../src/components/sign_in";
import SignUp from "../src/components/sign_up";
import NewPost from "../src/components/new_post";
import Setting from "../src/components/setting";

function App() {
  return (
    <div>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <NewPost /> */}
      <Setting />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("body"));
