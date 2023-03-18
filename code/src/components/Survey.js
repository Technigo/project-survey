import React from 'react';

const Survey = ({ name, volume, radioGroup, weapon, quest }) => {
  return (
    <div className="summary">
      <h3>Summary:</h3>
      <p>Name: {name}</p>
      <p>Race: {radioGroup}</p>
      <p>Weapon of choise: {weapon}</p>
      <p>Quest: {quest}</p>
      <p>How much you like the book: {volume}</p>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        target="_blank"
        rel="noopener noreferrer">
        <button type="button">Start adventure!</button>
      </a>
    </div>
  );
};

export default Survey;
