import React, { useState } from 'react';

const Score = () => {
  const [score, setScore] = useState('8');
  // console.log('score:', score); This gives a loooong line of code when using the slider, beware.
  // useState('8'); set as default
  return (
    <form className="container score">
      <h2>Do you want to set a minimum IMDB score?</h2>
      <p>(If it&apos;s below 6, you should not watch it, period.)</p>
      <p>The state is currently: {score} /10</p>
      <hr />
      <label htmlFor="imdbscore">
        IMDB score:
        <input
          type="range"
          id="imdbscore"
          name="imdbscore"
          min="6"
          max="10"
          step="0.1"
          value={score}
          checked={score}
          onChange={(event) => setScore(event.target.value)} />
      </label>
    </form>
  );
};

export default Score;
