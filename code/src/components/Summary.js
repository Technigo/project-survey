import React from 'react';

const Summary = ({ name, type, genre, score, apocalypse }) => {
  return (
    <div className="summary-container">
      <div className="headings">
        <h2>Summary <span role="img" className="emoji" aria-label="tv emoji">📺</span></h2>
        <hr />
      </div>
      <div className="question-container">
        <div className="summary-box">
          <h4>Nice choices {name}</h4>
          <h5>Type: <span>{type}</span></h5>
          <h5>Genre: <span>{genre}</span></h5>
          <h5>Min IMDB score: <span>{score}</span></h5>
          <h5>Apocalypse related? <span>{apocalypse ? 'Yes' : 'Does not matter'}</span></h5>
        </div>
        <p className="next">Are you ready to see what is next?</p>
      </div>
    </div>
  );
}

export default Summary;