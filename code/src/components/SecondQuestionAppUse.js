import React from 'react';

const SecondQuestionAppUse = () => {
  return (
    <div>
      <p>
        2{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        How often do you use the app?
      </p>
      <select>
        <option  disabled>
          Type or select an option
        </option>
        <option>Multiple times a day</option>
        <option>Once a day</option>
        <option>Couple of times a week</option>
        <option>Couple of times a month</option>
        <option>Less than once a month </option>
      </select>
    </div>
  );
};

export default SecondQuestionAppUse;
