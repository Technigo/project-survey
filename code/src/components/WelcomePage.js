import React from 'react'

const WelcomePage = ({ onStepChange }) => {
  return (
    <div className="outer-wrapper">
      <div className="survey-container">
        <h1>Welcome! Answer some random questions about food! </h1>
        <button type="button" className="start-button" onClick={onStepChange}>
        Start
        </button>
      </div>
    </div>
  )
}

export default WelcomePage