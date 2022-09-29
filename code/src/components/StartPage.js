import React from 'react';

const StartPage = ({ onStepChange }) => {
  return (
    <div className="container">
      <div className="question-container">
      <h1>Do you want to make your own personal greeting?</h1>
      </div>
      <button className="button" onClick={onStepChange}>Sure!</button>
    </div>
  )
}

export default StartPage;