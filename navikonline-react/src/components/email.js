import React from 'react'

import PropTypes from 'prop-types'

import './email.css'

const Email = (props) => {
  return (
    <div className="email-container">
      <div className="email-container1">
        <svg viewBox="0 0 1024 1024" className="email-icon">
          <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
        </svg>
        <span className="email-text">{props.text}</span>
      </div>
    </div>
  )
}

Email.defaultProps = {
  text: 'info@navikonline.in',
}

Email.propTypes = {
  text: PropTypes.string,
}

export default Email
