import React from 'react';
import NextButton from 'components/NextButton.js';

const Question1 = (props) => {
  //One way data-binding
  const handleNameChange = (event) => {
    props.setName(event.target.value);
  };

  return (
    <article className="form__question__1 question__wrapper">
      <label htmlFor="name" className="form__question">
        Hello there, what's your name?
      </label>
      <input
        id="name"
        type="text"
        onChange={handleNameChange}
        className="form__input"
        placeholder="Type your name here please.."
        required
      />
      {props.name !== '' && (
        <NextButton
          whatQuestionNext="secondQuestion"
          section={props.section}
          setSection={props.setSection}
          name={props.name}
          setName={props.setName}
        />
      )}
    </article>
  );
};
export default Question1;
