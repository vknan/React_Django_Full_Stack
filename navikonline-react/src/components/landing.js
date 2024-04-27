import React from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import PropTypes from "prop-types";

import "./landing.css";

const Landing = (props) => {
  return (
    <main className="landing-hero">
      <div className="landing-container">
        <div className="landing-container1">
          <div className="landing-container2">
            <div className="landing-container3">
              <h1 className="landing-text">{props.heading}</h1>
            </div>
          </div>
          <span className="landing-text1">
            <span>Providing Cutting-</span>
            <br></br>
            <span>Edge </span>
            <span>IT Solutions</span>
          </span>
          <div className="landing-container4">
            <div className="landing-container5">
              <input
                type="text"
                placeholder={props.textinputPlaceholder}
                className="landing-textinput input"
              />
              <button type="button" className="landing-button button">
                {props.button}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Player
        src="https://lottie.host/ea77eb96-9627-4ee4-bfd0-5bb299f341c3/TzCE7HFC48.json"
        loop={true}
        speed="1"
        autoplay={true}
        background="transparent"
        className="landing-lottie-node"
      ></Player>
    </main>
  );
};

Landing.defaultProps = {
  button: "Search",
  textinputPlaceholder: "Search to learn something...",
  heading: " Learn Anytime, Anywhere!",
};

Landing.propTypes = {
  button: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  heading: PropTypes.string,
};

export default Landing;
