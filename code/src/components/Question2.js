import React from 'react';
import NextButton from 'components/NextButton';
import PreviousButton from 'components/PreviousButton';
import ProgressBar from 'components/ProgressBar';

const Question2 = ({ ageGroup, setAgeGroup, section, setSection }) => {
  const handleAgeChange = (event) => {
    setAgeGroup(event.target.value);
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
              name={group}
              onChange={handleAgeChange}
              checked={ageGroup === group}
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
          section={section}
          setSection={setSection}
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
          section={section}
          setSection={setSection}
          currentState={ageGroup}
          defaultState={undefined}
          message="Please fill out your age"
        />
      </div>
    </article>
  );
};
export default Question2;
