import React from 'react';

const Genre = ({ genre, setGenre, step }) => {
  console.log('{ genre, setGenre, step };', { genre, setGenre, step })
  return (
    <div className="container genre">
      <h2>Question {step}</h2>
      <p>Any genre preferences?</p>
      <form className="form type">
        <p>Current state: {genre}</p>
        <select
          onChange={(event) => setGenre(event.target.value)}
          value={genre}>
          <option value="" disabled>Select type:</option>
          <option value="Crime">Crime</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
      </form>
    </div>
  );
};

export default Genre;
