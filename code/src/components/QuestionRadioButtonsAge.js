import React from 'react';
import NextButton from './NextButton';

const QuestionRadioButtonsAge = ({ ageGroup, setAgeGroup, section, setSection }) => {
  const ageGroups = ['15-25', '26-35', '36-45', '46-55', '56-65', 'Prefer not to say'];
  const handleAgeChange = (e) => {
    setAgeGroup(e.target.value)
  }
  return (
    <>
      <p>
        How old are you?
      </p>
      {ageGroups.map((group) => (
        <span key={group} className="radio-buttons">
          <input
            id={group}
            type="radio"
            name={group}
            value={group}
            onChange={handleAgeChange}
            checked={ageGroup === group} />
          <label htmlFor={group} key={group}>
            {group}
          </label>
        </span>
      ))}
      <NextButton
        whatQuestionNext="thirdQuestion"
        section={section}
        setSection={setSection}
        currentState={ageGroup}
        defaultState={undefined}
        message="Age is required" />
    </>
  )
}
export default QuestionRadioButtonsAge;