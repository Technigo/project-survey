import React from 'react';
import NextButton from './NextButton';

export const QuestionTextInputName = ({ firstName, setFirstName, section, setSection }) => {
  return (
    <article className="form-question1">
      <label htmlFor="firstName" id="name-label">Hi! What&apos;s your name?
        <input
          placeholder="Type your name here please..."
          name="name"
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          autoComplete="given-name"
          required />
      </label>
      <NextButton
        whatQuestionNext="secondQuestion"
        section={section}
        setSection={setSection}
        currentState={firstName}
        defaultState=""
        message="Name is required" />
    </article>
  )
}