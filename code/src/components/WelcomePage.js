import React from 'react'

const WelcomePage = ({ onStepChange }) => {
  return (
    <div className="survey-container">
      <h2>Welcome! Answer some random questions about food! </h2>
      <button type="button" className="start-button" onClick={onStepChange}>
        Start
      </button>
    </div>
  )
}

export default WelcomePage