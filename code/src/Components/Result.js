import React from 'react';

export const Result = ({ name, mood, drink }) => {
  return (
    <div className="resultComponent">
      <h2>Thank you for answering, this is how you responded:</h2>
      <div className="results">
        <p>Name: {name}</p>
        <p>Current mood: {mood}</p>
        <p>I prefer to drink: {drink}</p>
      </div>
      <h3>PS. You are doing a great job! You should be proud of yourself.</h3>
      <span className="heartIcon">&#129505;</span>
    </div>
  )
}