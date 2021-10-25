import React from 'react';
import './secondquestion.css'

const SecondQuestionAppUse = ({ usage, onUsageChange }) => {
  return (
    <div className="second-question">
      <p className="question">
        2{' '}
        <span>
          <b>&#x2192;</b>
        </span>{' '}
        How often do you use the app?
      </p>
      <select
        className="app-usage"
        defaultValue="Type or select an option..."
        onChange={(event) => onUsageChange(event.target.value)}
      >
        <option value="Type or select an option..." disabled>
          Type or select an option...
        </option>
        <option value="Multiple times a day">Multiple times a day</option>
        <option value="Once a day">Once a day</option>
        <option value="Couple of times a week">Couple of times a week</option>
        <option value="Couple of times a month">Couple of times a month</option>
        <option value="Less than once a month">Less than once a month </option>
      </select>
    </div>
  );
};

export default SecondQuestionAppUse;
