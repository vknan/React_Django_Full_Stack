import React from 'react'

import PropTypes from 'prop-types'

import './stats.css'

const Stats = (props) => {
  return (
    <div className="stats-stats">
      <div className="stats-stat">
        <h1 className="stats-text">{props.heading}</h1>
        <span className="stats-text01">{props.text}</span>
        <span className="stats-text02">{props.text1}</span>
      </div>
      <div className="stats-stat1">
        <h1 className="stats-text03">{props.heading1}</h1>
        <span className="stats-text04">{props.text2}</span>
        <span className="stats-text05">{props.text3}</span>
      </div>
      <div className="stats-stat2">
        <h1 className="stats-text06">
          <span>5</span>
          <span>+</span>
        </h1>
        <span className="stats-text09">{props.text4}</span>
        <span className="stats-text10">{props.text5}</span>
      </div>
      <div className="stats-stat3">
        <h1 className="stats-text11">
          <span>24/7</span>
        </h1>
        <span className="stats-text13">{props.text6}</span>
        <span className="stats-text14">{props.text7}</span>
      </div>
    </div>
  )
}

Stats.defaultProps = {
  text7: 'We are available for your queries.',
  text2: 'Projects completed',
  heading: '3+',
  text5: 'Of Experience in GIS, Machine Learning, Web Development.',
  text3: 'in total',
  text6: 'Support',
  text4: 'Years',
  heading1: '16',
  text: 'Happy clients',
  text1: 'We Value Our Clients Satisfaction.',
}

Stats.propTypes = {
  text7: PropTypes.string,
  text2: PropTypes.string,
  heading: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  text6: PropTypes.string,
  text4: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default Stats
