import React from 'react';
import NextButton from 'components/NextButton';
import PreviousButton from 'components/PreviousButton';
import ProgressBar from 'components/ProgressBar';

const Question4 = ({ suggestions, setSuggestions, section, setSection }) => {
  //One way data-binding
  const handleSuggestionChange = (event) => {
    setSuggestions(event.target.value);
  };

  return (
    <article className="form__question__4">
      {/* Question */}
      <label htmlFor="name" className="form__question" tabIndex="0">
        Do you have any other suggestions on what librarys or tech to learn?
      </label>

      {/* Input */}
      <div className="question__content-wrapper">
        <input
          id="suggestions"
          type="text"
          value={suggestions}
          onChange={handleSuggestionChange}
          className="form__input"
          placeholder="Write your suggestions here, please"
        />
      </div>

      {/* Navigation buttons */}
      <div className="buttons__wrapper">
        <PreviousButton
          whatQuestionPrevious="thirdQuestion"
          section={section}
          setSection={setSection}
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
          section={section}
          setSection={setSection}
          currentState={suggestions}
          defaultState=""
          message="Just ..something? 👼"
        />
      </div>
    </article>
  );
};
export default Question4;
