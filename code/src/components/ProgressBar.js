/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const ProgressBar = ({ step }) => {
  const completed = Math.round(step / 0.07)

  return (
    <div>
      <div>
        <h3>Step {step}/7. You have completed {completed}%</h3>
      </div>
    </div>
  );
};

export default ProgressBar
