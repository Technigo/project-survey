import React from 'react';

export const Question4 = ({ answer4, setAnswer4 }) => {
  const q4Handler = (event) => {
    event.preventDefault();
    setAnswer4(event.target.value);
  }
  return (
    <div className="q4-container">
      <h3>Question 4</h3>
      <p>Even when a survey is well-designed, there is always the potential for sampling bias,
        meaning that the people who choose to participate
        may not be representative of the broader population.
        This can lead to inaccurate conclusions being drawn from the data.
      </p>
      <p className="question-text">Please provide some information about yourself that would demonstrate
            that you are a typical human being:
      </p>
      <form className="personal-info">
        <label htmlFor="bio">Write something about yourself
          <textarea name="bio" id="bio" placeholder="Write here..." value={answer4} onChange={q4Handler} />
        </label>
      </form>
    </div>
  )
}