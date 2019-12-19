import React from "react";
import ReactDOM from "react-dom";
import "./main.css";
import Comp from "./block";
import Right from "./right";

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <div className="image_main">
          <img className="img1" src="image.svg" alt="pic1" />
        </div>

        <input
          className="search"
          type="text"
          placeholder=" Discover your next favorite thing"
        />
        <div className="tags">
          <a href="#">Deals</a>
          <a href="#">Jobs</a>
          <a href="#">Makers</a>
          <a href="#">Radio</a>
          <a href="#">Ships</a>
          <a href="#">...</a>
        </div>
        <button className="login">LOG IN</button>

        <button className="signup">SIGN UP</button>
      </div>
      <h4 className="topic">POPULAR DISCUSSION</h4>
      <div className="sec">
        <span className="main_top">Today</span>
        <span className="main_bottom">POPULAR NEWEST</span>
        <span className="main_last">Makers working today</span>
      </div>
      <div className="main_container">
        <div>
          <Comp
            name="Exploding Topics"
            image="https://ph-files.imgix.net/2588ed4d-46a6-43cc-91b5-f5fe7384a063?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
            desc="Find proven topics before they take off."
          />

          <Comp
            name="Find proven topics before they take off"
            image="https://ph-files.imgix.net/79232635-4471-485e-8d0c-ead08fe4f049?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
            desc="Create, ship & improve courses together"
          />
          <Comp
            name="Hyperise"
            image="https://ph-files.imgix.net/295148b9-dea7-497c-b6c2-451f8c5e48db?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop/>"
            desc="2X your email CTR with dynamic personalised images."
          />
          <Comp
            name="podcorn"
            image="https://ph-files.imgix.net/abb444b8-acbc-4e64-9f1f-e125dc28d667?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
            desc="Promote your brand through podcasts"
          />
          <Comp
            name="Zenia"
            image="https://ph-files.imgix.net/ed718ff4-adf3-4a65-8d19-1da203ecdd8a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
            desc="Get a new gift every day. Guaranteed."
          />
          <Comp
            name="Planable Advent Calendar"
            image="https://ph-files.imgix.net/70924b45-ff46-45c2-9802-e82c61a3ac84?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
            desc="Mobile wallet to store all your loyalty and membership cards"
          />
          <Comp
            name="Stocard"
            image="https://ph-files.imgix.net/86c39d00-f18e-4e54-9679-5c5da2433832?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
            desc="Mobile wallet to store all your loyalty and membership cards"
          />
          <Comp
            name="Veriff Station"
            image="https://ph-files.imgix.net/17be54be-b235-4f54-add4-544a703bcd37?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop"
            desc="Easy, accurate, and scalable ID verification"
          />
        </div>
        <Right />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("body"));
