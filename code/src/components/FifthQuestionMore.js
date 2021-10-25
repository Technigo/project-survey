import React from 'react';

            
const FifthQuestionMore = ({whatsMissing, onWhatsMissingChange}) => {
  return (
    <div>
      <p className="question">
        5{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        Is there anything you feel is missing?
      </p>
      <div>
        <input
          type="Text"
          placeholder="Type your answer here..."
          value={whatsMissing}
          onChange={onWhatsMissingChange}
        />
      </div>
    </div>
  );
};

export default FifthQuestionMore;
