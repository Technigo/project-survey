import React from 'react';

const SeventhQuestionReason = ({ textInput, performanceRate }) => {
  return (
    <div>
      <p>
        5{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        Could you tell us why you rated {performanceRate}?
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

export default SeventhQuestionReason;
