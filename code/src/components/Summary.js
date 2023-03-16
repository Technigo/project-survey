import React from 'react';

const Summary = ({ name, type, genre, score, apocalypse }) => {
  console.log('NOW RUNNING SUMMARY.js')
  console.log('name:', name)
  console.log('type:', type)
  console.log('genre:', genre)
  console.log('score:', score)
  console.log('apocalypse:', apocalypse)

  return (
    <div className="container summary">
      <div className="summary-box">
        <h2>Summary</h2>
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Genre: {genre}</p>
        <p>Minimum IMDB score: {score}</p>
        <p>Apocalypse related? {apocalypse ? 'Yes' : 'No'}</p>
      </div>
      <p>Are you ready to see what is next?</p>
    </div>
  );
}

export default Summary;