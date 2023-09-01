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
      {ageGroups.map((group) => (
        <label htmlFor={group} key={group} className="form-control">
          <input
            id={group}
            type="radio"
            name="ageGroup"
            value={group}
            onChange={handleAgeChange}
            checked={ageGroup === group} />
          {group}
        </label>
      ))}
      <div>
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