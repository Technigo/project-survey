import React from 'react';
import './seventhQuestionReason.css'

const SeventhQuestionReason = ({
  myReason,
  performanceRange,
  onMyReasonChange,
}) => {
  return (
    <div className="seventh-questionReason">
      <p className="question">
        7{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        Could you tell us why you rated {performanceRange}?
      </p>
      <div>
        <input
          className="reason"
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
