import React from "react";

import PropTypes from "prop-types";

import "./about.css";

const About = (props) => {
  return (
    <div id="about" className="about-banner">
      <h1 className="about-text">{props.heading}</h1>
      <div className="about-container">
        <div className="about-container1">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="about-image"
          />
          <span className="about-text01">
            <span className="about-text02">
              🚀 Welcome to Navikonline: Empowering Your Programming Journey!
            </span>
            <br></br>
            <span className="about-text04">
              At Navikonline, we embark on a shared journey of exploration and
              mastery in the vast universe of programming. Our commitment is
              rooted in the belief that education is not just a gateway to
              knowledge but a catalyst for transformation.
            </span>
          </span>
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="about-image01"
          />
        </div>
        <div className="about-container2">
          <img
            alt={props.imageAlt2}
            src={props.imageSrc2}
            className="about-image02"
          />
          <span className="about-text05">
            <span className="about-text06">👨‍💻 Our Programming Journey:</span>
            <br></br>
            <span className="about-text08">
              As passionate programmers ourselves, we intimately understand the
              exhilarating highs and occasional frustrations that come with
              mastering the art of coding. We&apos;ve walked the path of
              late-night debugging, celebrated the joy of a flawless code
              execution, and reveled in the endless possibilities that
              programming offers. Navikonline is born out of this journey, a
              platform where we strive to make your programming expedition as
              enriching and enjoyable as ours.
            </span>
          </span>
          <img
            alt={props.imageAlt3}
            src={props.imageSrc3}
            className="about-image03"
          />
        </div>
      </div>
      <div className="about-container3">
        <div className="about-container4">
          <img
            alt={props.imageAlt4}
            src={props.imageSrc4}
            className="about-image04"
          />
          <span className="about-text09">
            <span className="about-text10">💡</span>
            <span className="about-text11"> Focusing on Fundamentals:</span>
            <br></br>
            <span>
              In the ever-evolving landscape of technology,
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span>
              strong foundations are paramount. Our courses are meticulously
              curated, placing a significant emphasis on the fundamentals of
              computer science. We believe that a solid understanding of the
              basics serves as the bedrock for innovation and creativity in
              programming. Whether you&apos;re just starting or seeking to
              deepen your knowledge, our courses cater to a spectrum of
              learners, ensuring a holistic and inclusive learning experience.
            </span>
          </span>
          <img
            alt={props.imageAlt5}
            src={props.imageSrc5}
            className="about-image05"
          />
        </div>
        <div className="about-container5">
          <img
            alt={props.imageAlt6}
            src={props.imageSrc6}
            className="about-image06"
          />
          <span className="about-text15">
            <span className="about-text16">
              🌐 A Commitment to Accessibility:
            </span>
            <br></br>
            <span>
              Education should be accessible to everyone, irrespective of
              background or geographical location. That&apos;s why we offer a
              selection of four free programming courses, opening the doors to
              learning for enthusiasts worldwide. Our commitment to
              accessibility extends to creating an inclusive environment where
              diverse perspectives thrive, fostering a community of learners who
              inspire and support each other.
            </span>
          </span>
          <img
            alt={props.imageAlt7}
            src={props.imageSrc7}
            className="about-image07"
          />
        </div>
      </div>
      <div className="about-container6">
        <div className="about-container7">
          <img
            alt={props.imageAlt8}
            src={props.imageSrc8}
            className="about-image08"
          />
          <span className="about-text19">
            <span className="about-text20">🏆 Beyond Learning:</span>
            <br className="about-text21"></br>
            <span className="about-text22">
              Certification and Premium Content:
            </span>
            <br></br>
            <span>
              While we provide free courses to ignite your learning journey, we
              recognize the value of advanced features and certifications. Our
              premium content is designed to elevate your expertise, offering a
              pathway for those seeking in-depth knowledge, industry-recognized
              certifications, and access to advanced features that enhance your
              learning experience.
            </span>
          </span>
          <img
            alt={props.imageAlt9}
            src={props.imageSrc9}
            className="about-image09"
          />
        </div>
        <div className="about-container8">
          <img
            alt={props.imageAlt10}
            src={props.imageSrc10}
            className="about-image10"
          />
          <span className="about-text25">
            <span>
              Join Navikonline, where we don&apos;t just teach programming; we
              empower your journey to become a proficient and confident
              programmer. Let&apos;s code the future together!
            </span>
            <br></br>
            <br></br>
            <span>🌐 Start your programming journey now at us</span>
            <br></br>
          </span>
          <img
            alt={props.imageAlt11}
            src={props.imageSrc11}
            className="about-image11"
          />
        </div>
      </div>
    </div>
  );
};

About.defaultProps = {
  imageAlt10: "image",
  imageSrc11:
    "https://images.unsplash.com/photo-1621109246687-10ae613f2d8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxJTExVU1RSQVRJT058ZW58MHx8fHwxNzA5NTM0MzY5fDA&ixlib=rb-4.0.3&q=80&w=500",
  imageSrc2:
    "https://images.unsplash.com/photo-1559757742-654d5da2eaab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fG51bWJlciUyMDF8ZW58MHx8fHwxNzA5NTMzNjQ0fDA&ixlib=rb-4.0.3&q=80&w=200",
  heading: "Our Commitment ",
  imageSrc7:
    "https://images.unsplash.com/photo-1481622254766-0f0a35bf6e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxBQ0NFU1N8ZW58MHx8fHwxNzA5NTM4OTkxfDA&ixlib=rb-4.0.3&q=80&w=400",
  imageSrc4:
    "https://images.unsplash.com/photo-1621440318357-3e3c94221a1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fE5VTUJFUiUyMDN8ZW58MHx8fHwxNzA5NTM2Mjk4fDA&ixlib=rb-4.0.3&q=80&w=200",
  imageAlt1: "image",
  imageAlt11: "image",
  imageAlt6: "image",
  imageAlt3: "image",
  imageSrc8:
    "https://images.unsplash.com/photo-1583506573326-f44ad9661e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fE5VTUJFUiUyMDV8ZW58MHx8fHwxNzA5NTM4MDM0fDA&ixlib=rb-4.0.3&q=80&w=200",
  imageSrc6:
    "https://images.unsplash.com/photo-1610072947120-8736bbfc56e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fE5VTUJFUiUyMDR8ZW58MHx8fHwxNzA5NTM3MDA0fDA&ixlib=rb-4.0.3&q=80&w=200",
  imageSrc1:
    "https://images.unsplash.com/photo-1690683789978-3cf73960d650?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fFBST0dSQU1NSU5HJTIwVU5JVkVSU0V8ZW58MHx8fHwxNzA5NTM0MTAwfDA&ixlib=rb-4.0.3&w=400",
  imageSrc9:
    "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI4fHxCRVlPTkQlMjBMRUFSTklOR3xlbnwwfHx8fDE3MDk1MzgwODN8MA&ixlib=rb-4.0.3&w=400",
  imageAlt2: "image",
  imageSrc:
    "https://images.unsplash.com/photo-1629956044156-27896de7efa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxudW1iZXIlMjAxfGVufDB8fHx8MTcwOTUzMzY0NHww&ixlib=rb-4.0.3&q=80&w=200",
  imageAlt4: "image",
  imageAlt9: "image",
  imageAlt5: "image",
  imageSrc10:
    "https://images.unsplash.com/photo-1640684518379-b1cae1002131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fE5VTUJFUiUyMDZ8ZW58MHx8fHwxNzA5NTM5MjY2fDA&ixlib=rb-4.0.3&q=80&w=200",
  imageAlt7: "image",
  imageAlt8: "image",
  imageSrc3:
    "https://images.unsplash.com/photo-1564865878688-9a244444042a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fFBST0dSQU1NSU5HfGVufDB8fHx8MTcwOTUzNTExN3ww&ixlib=rb-4.0.3&q=80&w=400",
  imageAlt: "image",
  imageSrc5:
    "https://images.unsplash.com/photo-1611264327630-8090373c8cef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8c2VhcmNofDU4fHxJTExVU1RSQVRJT058ZW58MHx8fHwxNzA5NTM2MTg4fDA&ixlib=rb-4.0.3&q=80&w=400",
};

About.propTypes = {
  imageAlt10: PropTypes.string,
  imageSrc11: PropTypes.string,
  imageSrc2: PropTypes.string,
  heading: PropTypes.string,
  imageSrc7: PropTypes.string,
  imageSrc4: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageAlt6: PropTypes.string,
  imageAlt3: PropTypes.string,
  imageSrc8: PropTypes.string,
  imageSrc6: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageSrc9: PropTypes.string,
  imageAlt2: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt4: PropTypes.string,
  imageAlt9: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageSrc10: PropTypes.string,
  imageAlt7: PropTypes.string,
  imageAlt8: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc5: PropTypes.string,
};

export default About;
