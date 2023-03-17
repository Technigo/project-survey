import React from 'react';

export const ResultOptions = ({ dish, pic, recipe }) => {
  return (
    <div className="result-entry">
      <h2>{dish}!</h2>
      <img src={`${pic}`} alt={dish} />
      <p><a href={`${recipe}`} target="_blank" rel="noopener noreferrer">Get the recipe.</a></p>
    </div>
  )
}