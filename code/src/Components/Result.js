import React from 'react';

export const Result = ({ name, going, reward }) => {
  const restartButtonClick = () => {
    window.location.reload()
  }
  return (
    <>
      <div className="resultComponent">
        <h2>You are doing great and you should be proud of yourself! 💪</h2>
        <h3>This is the summary of your answers</h3>
        <div className="results">
          <p><span className="result-name">Your name:</span> {name}</p>
          <p><span className="result-going">How is it going:</span> {going}</p>
          <p><span className="result-reward">Reward:</span> {reward}</p>
        </div>
      </div>
      <button
        type="button"
        className="restartButton"
        onClick={restartButtonClick}>
        One more time!
      </button>
    </>
  )
}