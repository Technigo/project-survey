import React from 'react';

export const Rating = ({ rating, setRating, askQuestion }) => {
  return (
    <div className="question-container">
      <h2>{askQuestion}</h2>
      <label htmlFor="rating">Rating (between 1 and 10): </label>
      <input 
        type="number" 
        id="rating" 
        onChange={event => setRating(event.target.value)}
        value={rating}
        min="1" 
        max="10" 
      />
    </div>
  )
};