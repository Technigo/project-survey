import React from 'react';

const SeventhQuestionRecommend = ({ textInput, performanceRange }) => {
  return (
    <div>
      <p className="question">
        7{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        You have rated {performanceRange}, would you recommend it?
      </p>
      <div>
        <input
          type="Text"
          value={textInput}
          placeholder="Type your answer here..."
        />
      </div>
    </div>
  );
};

export default SeventhQuestionRecommend;
