import React from 'react';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

import 'styles/form.css'

const QuestionRadioButtonsAge = ({ ageGroup, setAgeGroup, section, setSection }) => {
  const ageGroups = ['15-25', '26-35', '36-45', '46-55', '56-65', 'Prefer not to say'];
  const handleAgeChange = (e) => {
    setAgeGroup(e.target.value)
  }
  return (
    <>
      <p className="form__question">
        How old are you?
      </p>
      <div className="question__content-wrapper">
        {ageGroups.map((group) => (
          <span key={group} className="form__radiobuttons">
            <input
              id={group}
              type="radio"
              name={group}
              className="form__radiobuttons"
              value={group}
              onChange={handleAgeChange}
              checked={ageGroup === group} />
            <label htmlFor={group} key={group}>
              <span className="form__radiobutton__input">{group}</span>
            </label>
          </span>
        ))}
      </div>
      <div className="buttons__wrapper">
        <PreviousButton
          whatQuestionPrevious="firstQuestion"
          section={section}
          setSection={setSection} />
        <NextButton
          whatQuestionNext="thirdQuestion"
          section={section}
          setSection={setSection}
          currentState={ageGroup}
          defaultState=""
          message="Please enter an age" />
      </div>
    </>
  )
}
export default QuestionRadioButtonsAge;