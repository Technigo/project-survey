import React from 'react';

const Summary = ({ name, volume, raceGroup, weapon, quest }) => {
  return (
    <div className="summary">
      <h3>Summary:</h3>
      <p>Name: {name}</p>
      <p>Race: {raceGroup}</p>
      <p>Weapon of choise: {weapon}</p>
      <p>Quest: {quest}</p>
      <p>Level of difficulty: {volume}</p>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer">
        <button type="button">Start adventure!</button>
      </a>
    </div>
  );
};

export default Summary;
