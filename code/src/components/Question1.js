import React from 'react';
import NextButton from 'components/NextButton';

const Question1 = ({ name, setName, section, setSection }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <article className="form__question__1">
      {/* Question */}
      <label htmlFor="name" className="form__question" tabIndex="0">
        Hello there, what's your name?
      </label>

      {/* Input */}
      <div className="question__content-wrapper">
        <input
          id="name"
          value={name}
          name="name"
          type="text"
          onChange={handleNameChange}
          className="form__input"
          placeholder="Type your name here please.."
          required
        />
      </div>

      {/* Navigation buttons */}
      <div className="buttons__wrapper">
        <NextButton
          whatQuestionNext="secondQuestion"
          section={section}
          setSection={setSection}
          currentState={name}
          defaultState=""
          message="Please type your name 😊"
        />
      </div>
    </article>
  );
};
export default Question1;
