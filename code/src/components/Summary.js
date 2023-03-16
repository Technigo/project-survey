import React from 'react';

const Summary = ({ name, type, genre, score, apocalypse }) => {
  console.log('NOW RUNNING SUMMARY.js')
  console.log('name:', name)
  console.log('type:', type)
  console.log('genre:', genre)
  console.log('score:', score)
  console.log('apocalypse:', apocalypse)

  return (
    <div className="summary-container">
      <div className="headings">
        <h2>Summary <span className="emoji">📺</span></h2>
        <hr />
      </div>
      <div className="summary-box">
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Genre: {genre}</p>
        <p>Minimum IMDB score: {score}</p>
        <p>Apocalypse related? {apocalypse ? 'Yes' : 'No'}</p>
        <p className="next">Are you ready to see what is next?</p>
      </div>
    </div>
  );
}

export default Summary;