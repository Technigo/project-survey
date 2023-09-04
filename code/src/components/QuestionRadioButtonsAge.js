import React from 'react';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';
import ProgressBar from './ProgressBar';

import 'styles/form.css'

const QuestionRadioButtonsAge = ({ step, setStep, ageGroup, setAgeGroup, section, setSection }) => {
  const ageGroups = ['15-25', '26-35', '36-45', '46-55', '56-65', 'Secret!'];
  const handleAgeChange = (e) => {
    setAgeGroup(e.target.value)
  };
  return (
    <>
      <h2>Age (Step 2 of 5)</h2>
      <fieldset>
        <legend>
        How old are you?<span>Required</span>
        </legend>
        {ageGroups.map((group) => (
          <label htmlFor={`radioButtonGroup-${group}`} key={group} className="form-control">
            <input
              id={`radioButtonGroup-${group}`}
              type="radio"
              name="ageGroup"
              value={group}
              onChange={handleAgeChange}
              checked={ageGroup === group} />
            {group}
          </label>
        ))}
      </fieldset>
      <div>
        <PreviousButton
          whatQuestionPrevious="firstQuestion"
          section={section}
          setSection={setSection}
          setStep={setStep}
          whatStepBefore="1" />
        <NextButton
          whatQuestionNext="thirdQuestion"
          section={section}
          setSection={setSection}
          currentState={ageGroup}
          defaultState=""
          message="Please enter an age"
          step={step}
          setStep={setStep}
          whatStepNext="3" />
      </div>
      <ProgressBar
        step={step} />
    </>
  )
}
export default QuestionRadioButtonsAge;