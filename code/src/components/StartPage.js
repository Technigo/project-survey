import React from 'react';

const StartPage = ({ onStepChange }) => {
  return (
    <div>
      <h1>Do you want to make your own personal greeting?</h1>
      <button className="button" onClick={onStepChange}>Sure!</button>
    </div>
  )
}

export default StartPage;