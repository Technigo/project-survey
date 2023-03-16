import React from 'react';

const Score = ({ score, setScore, step }) => {
  // console.log('score:', score); This gives a loooong line of code when using the slider, beware.

  return (
    <form className="score-container">
      <div className="headings">
        <h2>Question {step}</h2>
        <hr />
      </div>
      <div className="question-container">
        <h3>Do you want to set a minimum IMDB score?</h3>
        <p>(If it&apos;s below 6, you should not watch it, period.)</p>
        <hr />
        <p>The state is currently: {score} /10</p>
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
      </div>
    </form>
  );
};

export default Score;
