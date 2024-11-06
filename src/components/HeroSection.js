import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <vedio src="./vedios/bbvedio.mp4" autoPlay loop muted />
      <h1>Hisenberg</h1>
      <p>He is the danger</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          {" "}
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          {" "}
          WATCH TRAILER <i className="far fa-play-circle"/>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
