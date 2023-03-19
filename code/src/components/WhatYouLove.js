import React from 'react';
import './components.css';

export const WhatYouLove = ({ yourLove, setYourLove }) => {
  const handleWhatYouLove = (event) => {
    setYourLove(event.target.value);
  }
  return (
    <div>
      <h3 className="question">What do you love the most?</h3>
      <input className="input-field" htmlFor="what you love" type="text" value={yourLove} onChange={handleWhatYouLove} />
    </div>
  );
}
