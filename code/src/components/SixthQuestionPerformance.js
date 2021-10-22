import React from 'react';
import Range from './Range';
import './sixthquestion.css'


const SixthQuestionPerformance = ({ rangeValue, onRangeChange }) => {
  return (
    <div>
      <p>
        6{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        How would you rate the app's performance?
      </p>
      <div>
        <Range
          legend1="Very poor"
          legend2="Very good"
          rangeValue={rangeValue}
          onRangeChange={onRangeChange}
        />
      </div>
    </div>
  );
};

export default SixthQuestionPerformance;
