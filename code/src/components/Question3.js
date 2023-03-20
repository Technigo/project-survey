import React from 'react';

export const Question3 = ({ answer3, setAnswer3 }) => {
  const q3Handler = (event) => {
    setAnswer3(event.target.value);
  };

  return (
    <div>
      <h3>Question 3</h3>
      <p>Respondents may not provide truthful responses to sensitive questions for fear
        of negative perception, resulting in socially desirable answers
        instead of authentic ones.
      </p>
      <p className="question-text">How honest are you when taking surveys?</p>
      <form className="honesty-form">
        <label htmlFor="honesty-range">Rate your honesty level (0 = super fake, 10 = full honesty)
          <input className="honesty-range" id="honestyRange" name="honesty-range" type="range" min="0" max="10" value={answer3} onChange={q3Handler} />
        </label>
        <span className="scale">
          <p>0</p>
          <p>10</p>
        </span>
      </form>
    </div>
  );
};