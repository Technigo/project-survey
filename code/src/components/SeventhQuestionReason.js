import React from 'react';

const SeventhQuestionReason = ({
  myReason,
  performanceRange,
  onMyReasonChange,
}) => {
  return (
    <div>
      <p className="question">
        7{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        Could you tell us why you rated {performanceRange}?
      </p>
      <div>
        <input
          type="Text"
          placeholder="Type your answer here..."
          value={myReason}
          onChange={onMyReasonChange}
        />
      </div>
    </div>
  );
};

export default SeventhQuestionReason;
