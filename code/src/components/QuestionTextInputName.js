/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import NextButton from './NextButton';
import ProgressBar from './ProgressBar';

export const QuestionTextInputName = ({ step, setStep, firstName, setFirstName, section, setSection }) => {
  return (
    <>
      <label htmlFor="text-input" className="form__question">Hi! What&apos;s your name?</label>
      <input
        placeholder="Type your name here please..."
        name="firstName"
        className="input"
        inputMode="text"
        type="text"
        id="text-input"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        autoComplete="given-name"
        required />
      <div>
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
      </div>
      <ProgressBar
        step={step} />
    </>
  )
}