import React from 'react';

export const Result = ({ name, mood, drink }) => {
  const handleRestartButtonClick = () => {
    window.location.reload()
  }
  return (
    <>
      <div className="resultComponent">
        <h2>Thank you for answering, this is how you responded:</h2>
        <div className="results">
          <p>Name: {name}</p>
          <p>Current mood: {mood}</p>
          <p>I prefer to drink: {drink}</p>
        </div>
        <h3>PS. You are doing great! You should be proud of yourself.</h3>
        <span
          className="heartIcon"
          aria-label="Heart icon">&#129505;
        </span>
      </div>
      <button
        type="button"
        className="restartButton"
        onClick={handleRestartButtonClick}>
        RESTART SURVEY
      </button>
    </>
  )
}