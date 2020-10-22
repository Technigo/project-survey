import React from 'react';
import NextButton from 'components/NextButton.js';
import PreviousButton from 'components/PreviousButton.js';
import ProgressBar from 'components/ProgressBar.js';

const Question4 = (props) => {
  //One way data-binding
  const handleSuggestionChange = (event) => {
    props.setSuggestions(event.target.value);
  };

  return (
    <article className="form__question__4">
      {/* Question */}
      <label htmlFor="name" className="form__question">
        Do you have any other suggestions on what librarys or tech to learn?
      </label>

      {/* Input */}
      <div className="question__content-wrapper">
        <input
          id="suggestions"
          type="text"
          onChange={handleSuggestionChange}
          className="form__input"
          placeholder={props.suggestions}
        />
      </div>

      {/* Navigation buttons */}
      <div className="buttons__wrapper">
        <PreviousButton
          whatQuestionPrevious="thirdQuestion"
          section={props.section}
          setSection={props.setSection}
        />
        <ProgressBar
          firstDot="progress dot_000"
          secondDot="progress dot_000"
          thirdDot="progress dot_000"
          fourthDot="progress dot_000"
          fifthDot="progress dot_fff"
        />
        <NextButton
          whatQuestionNext="fifthQuestion"
          section={props.section}
          setSection={props.setSection}
        />
      </div>
    </article>
  );
};
export default Question4;
