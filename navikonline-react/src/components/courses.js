import React from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import PropTypes from "prop-types";

import "./courses.css";

const Courses = (props) => {
  return (
    <div className="courses-container">
      <div className="courses-container01">
        <div className="courses-container02">
          <div className="courses-container03">
            <h1 className="courses-text">{props.heading}</h1>
          </div>
        </div>
        <div className="courses-container04">
          <div className="courses-container05">
            <div className="courses-container06">
              <div className="courses-container07">
                <div className="courses-container08">
                  <div className="courses-container09">
                    <a
                      href={props.linkFeatureCard3}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="courses-link"
                    >
                      <div className="courses-feature-card">
                        <Player
                          src="https://lottie.host/a8811818-ae36-4e37-a403-6c136d1bb4fc/nhGwKa3kRV.json"
                          loop="true"
                          speed="0.5"
                          autoplay="true"
                          background="transparent"
                          className="courses-lottie-node"
                        ></Player>
                        <h2 className="courses-text01">{props.heading4}</h2>
                        <span className="courses-text02">{props.text6}</span>
                        <span className="courses-text03">{props.text7}</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              href={props.linkFeatureCard}
              target="_blank"
              rel="noreferrer noopener"
              className="courses-link1"
            >
              <div className="courses-feature-card1">
                <div className="courses-container10">
                  <Player
                    src="https://lottie.host/1de72a90-338a-4a89-b5fb-1b8075ef6724/aqVpKBHkqu.json"
                    loop="true"
                    speed="0.5"
                    autoplay="true"
                    background="transparent"
                    className="courses-lottie-node1"
                  ></Player>
                </div>
                <h2 className="courses-text04">{props.heading1}</h2>
                <span className="courses-text05">{props.text}</span>
                <span className="courses-text06">{props.text1}</span>
              </div>
            </a>
          </div>
          <div className="courses-container11">
            <a
              href={props.linkFeatureCard1}
              target="_blank"
              rel="noreferrer noopener"
              className="courses-link2"
            >
              <div className="courses-feature-card2">
                <Player
                  src="https://lottie.host/fef610e5-2e5a-474d-a0e7-e982378b0f2c/x60CSNtRuV.json"
                  loop="true"
                  speed="0.5"
                  autoplay="true"
                  background="transparent"
                  className="courses-lottie-node2"
                ></Player>
                <h2 className="courses-text07">{props.heading2}</h2>
                <span className="courses-text08">{props.text2}</span>
                <span className="courses-text09">{props.text3}</span>
              </div>
            </a>
            <a
              href={props.linkFeatureCard2}
              target="_blank"
              rel="noreferrer noopener"
              className="courses-link3"
            >
              <div className="courses-feature-card3">
                <Player
                  src="https://lottie.host/e0f20cd2-656f-4779-9444-e8bd9ebdb6b3/aGoP67cixZ.json"
                  loop="true"
                  speed="0.5"
                  autoplay="true"
                  background="transparent"
                  className="courses-lottie-node3"
                ></Player>
                <h2 className="courses-text10">{props.heading3}</h2>
                <span className="courses-text11">{props.text4}</span>
                <span className="courses-text12">{props.text5}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Courses.defaultProps = {
  heading1: "CSPY: Introduction to Python Programming",
  heading4: "CSF: Computer Science Fundamentals",
  linkFeatureCard2: "https://www.example.com",
  text2: "Begin the Exciting Journey in Web Design & Development",
  linkFeatureCard: "https://www.example.com",
  heading3: "CSAI: Introduction to Artificial Intelligence With Python",
  text3: "SEE MORE",
  text5: "SEE MORE",
  text1: "SEE MORE",
  linkFeatureCard1: "https://www.example.com",
  heading2: "CSW: Introduction to Web Programming with Python and JavaScript",
  linkFeatureCard3: "https://www.example.com",
  text: "Welcome to the World of Python Programming",
  heading: "Courses",
  text7: "SEE MORE",
  text4: "Start Your Journey by understanding the Artificial Intelligence",
  text6: "Learn the Solid Foundations of Computer Science at us",
};

Courses.propTypes = {
  heading1: PropTypes.string,
  heading4: PropTypes.string,
  linkFeatureCard2: PropTypes.string,
  text2: PropTypes.string,
  linkFeatureCard: PropTypes.string,
  heading3: PropTypes.string,
  text3: PropTypes.string,
  text5: PropTypes.string,
  text1: PropTypes.string,
  linkFeatureCard1: PropTypes.string,
  heading2: PropTypes.string,
  linkFeatureCard3: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  text7: PropTypes.string,
  text4: PropTypes.string,
  text6: PropTypes.string,
};

export default Courses;
