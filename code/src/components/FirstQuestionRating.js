import React from 'react';
import './firstQuestion.css';

const FirstQuestionRating = () => {
  return (
    <div className="firstQuestion">
      <p>
        1{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        How would you rate the app overall?
      </p>
      <div className="stars">
        <h2>&#x2606;</h2>
        <h2>&#x2606;</h2>
        <h2>&#x2606;</h2>
        <h2>&#x2606;</h2>
        <h2>&#x2606;</h2>
      </div>
    </div>
  );
};

export default FirstQuestionRating;
