import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./about.css";

const About = () => {
  const [aboutData, setAboutData] = useState([]);

  const aboutContainerRef = useRef(null);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("https://vknan.pythonanywhere.com/api/abouts/")
      .then((response) => response.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.error("Error fetching about data:", error));
  }, []);

  return (
    <div>
      <h1 id="about" className="about-title">
        Our Commitment
      </h1>
      <div ref={aboutContainerRef} className="about-container">
        {aboutData.map((item) => (
          <div key={item.id} className="about-card">
            <img alt={item.name} src={item.image} className="about-image" />
            <div className="about-content">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

About.propTypes = {
  aboutData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ),
};

export default About;
