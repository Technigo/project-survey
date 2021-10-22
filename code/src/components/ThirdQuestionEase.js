import React from 'react';
import Range from './Range';
import './thirdquestion.css';

const ThirdQuestionEase = ({ rangeValue, onRangeChange }) => {
  return (
    <div className= "thirdQuestion">
      <p className="question">
        3{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        How easy is it to use?
      </p>
      <div>
        <Range
          legend1="Too complicated"
          legend2="Very easy"
          rangeValue={rangeValue}
          onRangeChange={onRangeChange}
        />
      </div>
    </div>
  );
};

export default ThirdQuestionEase;
