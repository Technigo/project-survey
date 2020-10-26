import React from 'react';

import '../style/input-box.css'

export const Rating = ({ rating, setRating, askQuestion, handleRatingChange }) => {
  return (
    <div className="question-container">
      <h2 tabIndex="0">{askQuestion}</h2>
      <label htmlFor="rating">Rating (between 1 and 10): </label>
      <input 
        id="rating" 
        className="input-rating"
        type="number" 
        onChange={handleRatingChange}
        value={rating}
        min="1" 
        max="10" 
      />
    </div>
  )
};