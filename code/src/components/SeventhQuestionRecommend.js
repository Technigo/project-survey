import React from 'react';

const SeventhQuestionRecommend = ({
  performanceRange,
  onRecommendationChange,
}) => {
  return (
    <div>
      <p className="question">
        7{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        You have rated its performance as {performanceRange}, would you
        recommend it?
      </p>
      <div>
        <label className="recommend">
          <input
            type="radio"
            name="yes"
            value="Yes"
            onChange={onRecommendationChange}
          />
          Yes
        </label>

        <label className="recommend">
          <input
            type="radio"
            name="no"
            value="No"
            onChange={onRecommendationChange}
          />
          No
        </label>
      </div>
    </div>
  );
};

export default SeventhQuestionRecommend;
