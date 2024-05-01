// Header Component with Mobile Menu Fix
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header-header">
      <img alt={props.imageAlt} src={props.imageSrc} className="header-image" />

      <div className="header-nav">
        <nav className="header-nav1">
          <span className="header-text">
            <Link to="/">{props.text}</Link>
          </span>
          <span className="header-text1">
            <Link to="/about">{props.text1}</Link>
          </span>
          <span className="header-text2">
            <Link to="/courses">{props.text2}</Link>
          </span>
          <span className="header-text3">
            <Link to="/blog">{props.text3}</Link>
          </span>
          <span className="header-text4">
            <Link to="/contact">{props.text4}</Link>
          </span>
        </nav>
      </div>

      <div className="header-btn-group">
        <button className="header-login button">{props.login}</button>
        <button className="button">{props.register}</button>
      </div>

      <div className="header-burger-menu" onClick={handleToggleMobileMenu}>
        <svg viewBox="0 0 1024 1024" className="header-icon">
          <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
        </svg>
      </div>

      {isMobileMenuOpen && (
        <div className="header-mobile-menu">
          <nav className="mobile-nav-links">
            <Link to="/">{props.text}</Link>
            <Link to="/about">{props.text1}</Link>
            <Link to="/courses">{props.text2}</Link>
            <Link to="/blog">{props.text3}</Link>
            <Link to="/contact">{props.text4}</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

Header.defaultProps = {
  text: "Home",
  text1: "About",
  text2: "Courses",
  text3: "Blog",
  text4: "Contact",
  login: "Login",
  register: "Register",
  imageSrc: "/design-1500h.webp",
  imageSrc1: "https://presentation-website-assets.teleporthq.io/logos/logo.png",
  imageAlt: "Logo",
  imageAlt1: "Image",
};

Header.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  login: PropTypes.string,
  register: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc1: PropTypes.string,
  imageAlt: PropTypes.string,
  imageAlt1: PropTypes.string,
};

export default Header;
