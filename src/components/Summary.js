import React from 'react';

export const Summary = ({ answer1, answer2, answer3, answer4 }) => {
  return (
    <div>
      <h3>Result</h3>
      <p>Thank you for taking this survey. Hopefully your contribution
        will help mankind understand that surveys are often unwanted and extremely boring!
      </p>
      <p className="question-text">Theese are the insights you provided:
      </p>
      <ul className="summary-list">
        <li>Respondent Fatigue
          <p>Your answer: {answer1}</p>
        </li>
        <li>Complicated wording
          <p>Your answer: {answer2}</p>
        </li>
        <li>Social desirability bias
          <p>Your answer: {answer3}</p>
        </li>
        <li>Sampling and representation issues
          <p>Your answer: {answer4}</p>
        </li>
      </ul>
    </div>
  )
};