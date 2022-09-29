import React from 'react';

export const Result = ({ name, age, recycle, scale }) => {
  return (
    <div className="question-wrapper">
      <div className="question">
        <p>Your name is: {name}</p>
        <p>Your age is between: {age}</p>
        <p>How you recycle: {recycle}</p>
        <p>How much you love earth on a scale of 1-10: {scale}</p>
      </div>
    </div>
  );
}
