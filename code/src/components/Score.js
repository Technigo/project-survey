import React from 'react';

const Score = ({ score, setScore, step }) => {
  // console.log('score:', score); This gives a loooong line of code when using the slider, beware.

  return (
    <form className="score-container">
      <div className="headings">
        <h2 aria-hidden="true">Question {step} / 5</h2>
        {/* For screen reader */}
        <h2 className="visually-hidden">Question {step} out of 5</h2>
        <hr />
      </div>
      <div className="question-container">
        <h3>Do you want to set a minimum IMDB score?</h3>
        <span>(If it&apos;s below 6, you should probably not watch it anyway)</span>
        <p>Min IMDB score: {score} /10</p>
        <label htmlFor="imdbscore">
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
