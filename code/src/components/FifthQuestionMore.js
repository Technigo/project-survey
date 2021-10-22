import React from 'react';

const FifthQuestionMore = ({textInput}) => {
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
        <input type="Text" placeholder="Type your answer here..." />
      </div>
    </div>
  );
};

export default FifthQuestionMore;
