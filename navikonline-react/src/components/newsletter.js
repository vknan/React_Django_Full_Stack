import React from 'react'

import PropTypes from 'prop-types'

import './newsletter.css'

const Newsletter = (props) => {
  return (
    <div className="newsletter-banner">
      <div className="newsletter-container">
        <h1 className="newsletter-text">{props.heading}</h1>
        <span className="newsletter-text1">{props.text}</span>
        <div className="newsletter-container1">
          <input
            type="text"
            placeholder={props.textinputPlaceholder}
            className="newsletter-textinput input"
          />
          <button className="newsletter-button button">{props.button}</button>
        </div>
      </div>
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="newsletter-image"
      />
    </div>
  )
}

Newsletter.defaultProps = {
  heading: 'Subscribe to Our Newsletter',
  text: 'Get Updates from us via most informational Newsletter',
  imageAlt: 'image',
  textinputPlaceholder: 'Email here...',
  button: 'Subscribe',
  imageSrc:
    'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fG5ld3N8ZW58MHx8fHwxNzA4NTkxNzY1fDA&ixlib=rb-4.0.3&w=300',
}

Newsletter.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  imageAlt: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  button: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default Newsletter
