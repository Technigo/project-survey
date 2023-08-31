import React from 'react';
import NextButton from './NextButton';

export const QuestionTextInputName = ({ firstName, setFirstName, section, setSection }) => {
  return (
    <article>
      <label htmlFor="firstName" className="form__question">Hi! What&apos;s your name?
        <div className="question__content-wrapper">
          <input
            placeholder="Type your name here please..."
            name="name"
            className="form__input"
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="given-name"
            required />
        </div>
      </label>
      <div className="buttons__wrapper">
        <NextButton
          whatQuestionNext="secondQuestion"
          section={section}
          setSection={setSection}
          currentState={firstName}
          defaultState=""
          message="Please enter a name" />
      </div>
    </article>
  )
}