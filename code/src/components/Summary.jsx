import React from 'react'

export const Summary = ({ learnKnow, loneTeam, backFront }) => {
  return (
    <div className="summary-container">
      <p>{learnKnow}</p>
      <p>{loneTeam}</p>
      <p>{backFront}</p>
    </div>
  );
}
