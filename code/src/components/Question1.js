import React from 'react';
import NextButton from 'components/NextButton';
import Popup from 'components/Popup';

const Question1 = ({ name, setName, section, setSection }) => {
  //One way data-binding
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <article className="form__question__1">
      {/* Question */}
      <label htmlFor="name" className="form__question">
        Hello there, what's your name?
      </label>

      {/* Input */}
      <div className="question__content-wrapper">
        <input
          id="name"
          type="text"
          onChange={handleNameChange}
          className="form__input"
          placeholder={name}
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
          defaultState="Type your name here please.."
          message="Please type your name 😊"
        />
      </div>
    </article>
  );
};
export default Question1;
