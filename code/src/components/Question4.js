import React from 'react';
import NextButton from 'components/NextButton.js';

const Question4 = (props) => {
  //One way data-binding
  const handleSuggestionChange = (event) => {
    props.setSuggestions(event.target.value);
  };

  return (
    <article className="form__question__4 question__wrapper">
      <label htmlFor="name" className="form__question">
        Do you have any other suggestions on what librarys or tech to learn?
      </label>
      <input
        id="suggestions"
        type="text"
        onChange={handleSuggestionChange}
        className="form__input"
        placeholder="Write your suggestions here, please"
      />

      <NextButton
        whatQuestionNext="fifthQuestion"
        section={props.section}
        setSection={props.setSection}
      />
    </article>
  );
};
export default Question4;
