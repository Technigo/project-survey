import React from 'react';

const Genre = ({ genre, setGenre, step }) => {
  console.log('NOW RUNNING GENRE.js')
  // console.log('{ genre, setGenre, step };', { genre, setGenre, step })
  return (
    <div className="genre-container">
      <div className="headings">
        <h2 aria-hidden="true">Question {step} / 5</h2>
        <h2 className="visually-hidden">Question {step} out of 5</h2>
        <hr />
      </div>
      <div className="question-container">
        <h4>Any genre preferences?</h4>
        <form className="form type">
          {/* <p>Current state: {genre}</p> */}
          <select
            aria-label="Drop down menu for selecting a genre"
            onChange={(event) => setGenre(event.target.value)}
            value={genre}>
            <option value="Surprise me!">Surprise me!</option>
            <option value="Thriller">Thriller</option>
            <option value="Drama">Drama</option>
            <option value="Comedy">Comedy</option>
            <option value="Mystery">Mystery</option>
            <option value="Crime">Crime</option>
            <option value="Adventure">Adventure</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Horror">Horror</option>
            <option value="Romance">Romance</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Genre;
