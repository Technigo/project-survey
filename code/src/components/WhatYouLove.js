import React from 'react';
import './components.css';

export const WhatYouLove = ({ yourLove, setYourLove }) => {
  const handleWhatYouLove = (event) => {
    setYourLove(event.target.value);
  }
  return (
    <div>
      <p className="question">What do you love the most?</p>
      <input className="input-field" htmlFor="what you love" type="text" value={yourLove} onChange={handleWhatYouLove} />
    </div>
  );
}
