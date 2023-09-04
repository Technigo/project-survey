/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import NextButton from './NextButton';
import ProgressBar from './ProgressBar';

export const QuestionTextInputName = ({ step, setStep, firstName, setFirstName, section, setSection }) => {
  return (
    <>
      <h2>Name (Step 1 of 5)</h2>
      <label id="inputLabel" htmlFor="nameInput">What&apos;s your name?<span>Required</span></label>
      <input
        aria-labelledby="inputLabel"
        aria-describedby="form-error"
        aria-required="true"
        placeholder="Type your name here please..."
        name="firstName"
        className="input"
        inputMode="text"
        type="text"
        id="nameInput"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        autoComplete="given-name"
        required />
      <NextButton
        whatQuestionNext="secondQuestion"
        section={section}
        setSection={setSection}
        currentState={firstName}
        defaultState=""
        message="Please enter a name"
        step={step}
        setStep={setStep}
        whatStepNext="2" />
      <ProgressBar
        step={step} />
    </>
  )
}