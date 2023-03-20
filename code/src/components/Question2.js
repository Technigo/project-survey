import React from 'react';

export const Question2 = ({ answer2, setAnswer2 }) => {
  const q2Handler = (event) => {
    setAnswer2(event.target.value);
  };

  return (
    <div>
      <h3>Question 2</h3>
      <p>Another problem is that the wording sometimes
        makes it hard to understand what kind of answer is expected.
      </p>
      <p className="question-text">Is there, in your opinion, a positive correlation between
        the utilization of a highly abstract language in the textual content,
        and the level of difficulty in comprehension experienced by you as a reader?
      </p>
      <form className="select-form">
        <label htmlFor="Answer2-select">Pick your answer:
          <select
            name="Answer2-select"
            onChange={q2Handler}
            value={answer2}>
            <option value="default">Choose option</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="don't understand">I do not understand</option>
          </select>
        </label>
      </form>
    </div>
  );
};