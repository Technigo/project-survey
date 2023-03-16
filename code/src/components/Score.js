import React from 'react';

const Score = ({ score, setScore }) => {
  // console.log('score:', score); This gives a loooong line of code when using the slider, beware.

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
          onChange={(event) => setScore(event.target.value)} />
      </label>
    </form>
  );
};

export default Score;
