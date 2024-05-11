import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./about.css";

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  const [showArrows, setShowArrows] = useState(false);
  const aboutContainerRef = useRef(null);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch("https://vknan.pythonanywhere.com/api/abouts/")
      .then((response) => response.json())
      .then((data) => setAboutData(data))
      .catch((error) => console.error("Error fetching about data:", error));

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const containerRef = aboutContainerRef.current;

    // Check if containerRef is defined and not null
    if (containerRef) {
      const containerTop = containerRef.offsetTop;
      const containerHeight = containerRef.offsetHeight;

      // Show arrows if user has scrolled past the top of the about container and before the end of the container
      setShowArrows(
        scrollY > containerTop && scrollY < containerTop + containerHeight
      );
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <h1 className="about-title">Our Commitment</h1>
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
        {/* Show arrows based on state */}
        {showArrows && (
          <>
            <div
              className="scroll-up-arrow"
              onClick={() => scrollToSection(`section-${aboutData[0].id}`)}
            >
              &uarr;
            </div>
            <div
              className="scroll-down-arrow"
              onClick={() =>
                scrollToSection(`section-${aboutData[aboutData.length - 1].id}`)
              }
            >
              &darr;
            </div>
          </>
        )}
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
