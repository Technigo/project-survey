import React from 'react';

export const Question1 = ({ answer1, setAnswer1 }) => {
  const q1Handler = (event) => {
    setAnswer1(event.target.value);
  };

  return (
    <div>
      <h3>Question 1</h3>
      <p>People tend to grow tired of surveys as they are often time-consuming and repetitive.</p>
      <p>To what degree do you agree with the following statement?</p>
      <p className="question-text">“I often skip surveys because they are too boring to fill out”</p>
      <form className="radio-form">
        <label htmlFor="strongly-disagree">
          <input type="radio" name="q1-answer1" id="strongly-disagree" value="strongly-disagree" checked={answer1 === 'strongly-disagree'} onChange={q1Handler} />
          Strongly disagree
        </label>
        <label htmlFor="somewhat-disagree">
          <input type="radio" name="q1-answer1" id="somewhat-disagree" value="somewhat-disagree" checked={answer1 === 'somewhat-disagree'} onChange={q1Handler} />
          Somewhat disagree
        </label>
        <label htmlFor="neutral">
          <input type="radio" name="q1-answer1" id="neutral" value="neutral" checked={answer1 === 'neutral'} onChange={q1Handler} />
          Neutral
        </label>
        <label htmlFor="somewhat-agree">
          <input type="radio" name="q1-answer1" id="somewhat-agree" value="somewhat-agree" checked={answer1 === 'somewhat-agree'} onChange={q1Handler} />
          Somewhat agree
        </label>
        <label htmlFor="strongly-agree">
          <input type="radio" name="q1-answer1" id="strongly-agree" value="strongly-agree" checked={answer1 === 'strongly-agree'} onChange={q1Handler} />
          Strongly agree
        </label>
      </form>
    </div>
  );
}