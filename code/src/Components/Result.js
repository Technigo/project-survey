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
          <p><span className="resultHeading">Name:</span> {name}</p>
          <p><span className="resultHeading">Current mood:</span> {mood}</p>
          <p><span className="resultHeading">I prefer to drink:</span> {drink}</p>
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