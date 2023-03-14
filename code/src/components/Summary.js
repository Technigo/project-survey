import React from 'react';

const Summary = ({ name, type, genre }) => {
  return (
    <div className="container summary">
      <div className="summary-box">
        <h2>Summary</h2>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Genre: {genre}</p>
      </div>
      <p>Are you ready to see what is next?</p>
    </div>
  );
}

export default Summary;