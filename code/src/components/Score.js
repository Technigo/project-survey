import React, { useState } from 'react';

const Score = () => {
  const [score, setScore] = useState('');
  // console.log('score:', score); This gives a loooong line of code when using the slider, beware.

  return (
    <form className="container score">
      <h2>Do you want to set a minimum IMDB score?</h2>
      <p>The state is currently: {score} /10</p>
      <label htmlFor="imdbscore">
        IMDB score:
        <input
          type="range"
          id="imdbscore"
          name="imdbscore"
          min="0"
          max="10"
          step="0.1"
          onChange={(event) => setScore(event.target.value)}
          value={score} />
      </label>
    </form>
  );
};

export default Score;
