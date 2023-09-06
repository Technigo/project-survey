/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import NextButton from './NextButton';
import ProgressBar from './ProgressBar';
import PreviousButton from './PreviousButton';

export const QuestionTextInputName = ({ step, setStep, firstName, setFirstName, section, setSection }) => {
  return (
    <>
      <h2>Name (Step 1 of 5)</h2>
      <div className="form__field name">
        <label id="inputLabel" htmlFor="nameInput">What&apos;s your preferred name?<span>Required</span></label>
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
      </div>
      <section className="form__navigation">
        <PreviousButton
          whatQuestionPrevious="startingPage"
          section={section}
          setSection={setSection}
          setStep={setStep}
          whatStepBefore="0" />
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
      </section>
      <ProgressBar
        step={step} />
    </>
  )
}