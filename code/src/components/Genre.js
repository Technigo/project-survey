import React from 'react';

const Genre = ({ genre, setGenre, step }) => {
  // console.log('{ genre, setGenre, step };', { genre, setGenre, step })
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
          <option value="thriller">Thriller</option>
          <option value="drama">Drama</option>
          <option value="comedy">Comedy</option>
          <option value="mystery">Mystery</option>
          <option value="crime">Crime</option>
          <option value="adventure">Adventure</option>
          <option value="sci-fi">Sci-fi</option>
          <option value="horror">Horror</option>
          <option value="romance">Romance</option>
        </select>
      </form>
    </div>
  );
};

export default Genre;
