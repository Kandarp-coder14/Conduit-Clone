import React from "react";
import Right from "./right";

function Comp(props) {
  return (
    <div className="comp">
      <div className="pic">
        <img className="im" src={props.image} alt="picq" />
      </div>
      <div className="name">
        <h2>{props.name}</h2>
        <h4>{props.desc}</h4>
        <div className="chat_con">
          <img className="chat" src="chat.svg" /> <span>77</span>
        </div>
      </div>
      <div className="arrow">
        <span className="arrow-icon">▲</span>
        <p className="para">2255</p>
      </div>
    </div>
  );
}
export default Comp;
