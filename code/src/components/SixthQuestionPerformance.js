import React from 'react';
import Button from './Button';
import './sixthquestion.css'


const SixthQuestionPerformance = () => {
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
        <Button buttonText="0" />
        <Button buttonText="1" />
        <Button buttonText="2" />
        <Button buttonText="3" />
        <Button buttonText="4" />
        <Button buttonText="5" />
      </div>
    </div>
  );
};

export default SixthQuestionPerformance;
