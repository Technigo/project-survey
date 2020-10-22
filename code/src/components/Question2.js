import React from 'react';
import NextButton from 'components/NextButton.js';
import PreviousButton from 'components/PreviousButton.js';
import ProgressBar from 'components/ProgressBar.js';

const Question2 = (props) => {
  const handleAgeChange = (event) => {
    props.setAgeGroup(event.target.value);
  };

  const ageGroups = ['15-25', '26-35', '36-45', '46-55', '56-65', 'Secret!'];

  return (
    <article className="form__question__2">
      {/* Question */}
      <p htmlFor="age" className="form__question">
        And may I ask how old are you?
      </p>

      {/* Input */}
      <div className="question__content-wrapper">
        {ageGroups.map((group) => (
          <label key={group}>
            <input
              id="age"
              type="radio"
              value={group}
              onChange={handleAgeChange}
              checked={props.ageGroup === group}
              className="form__radiobuttons"
            />
            <span className="form__radiobutton__input">{group}</span>
          </label>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="buttons__wrapper">
        <PreviousButton
          whatQuestionPrevious="firstQuestion"
          section={props.section}
          setSection={props.setSection}
        />
        <ProgressBar
          firstDot="progress dot_000"
          secondDot="progress dot_000"
          thirdDot="progress dot_fff"
          fourthDot="progress dot_fff"
          fifthDot="progress dot_fff"
        />
        <NextButton
          whatQuestionNext="thirdQuestion"
          section={props.section}
          setSection={props.setSection}
          currentState={props.ageGroup}
          defaultState={undefined}
        />
      </div>
    </article>
  );
};
export default Question2;
