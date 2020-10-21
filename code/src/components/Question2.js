import React from 'react';
import NextButton from 'components/NextButton.js';
import PreviousButton from 'components/PreviousButton.js';

const Question2 = (props) => {
  const handleAgeChange = (event) => {
    props.setAgeGroup(event.target.value);
  };
  return (
    <article className="form__question__2 question__wrapper">
      <p htmlFor="age" className="form__question">
        And may I ask how old are you?
      </p>
      <div className="all-labels__wrapper">
        {props.ageGroups.map((group) => (
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
      <PreviousButton
        whatQuestionPrevious="firstQuestion"
        section={props.section}
        setSection={props.setSection}
      />
      <NextButton
        whatQuestionNext="thirdQuestion"
        section={props.section}
        setSection={props.setSection}
      />
    </article>
  );
};
export default Question2;
