/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import React from 'react';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

const QuestionDropdownMenu = ({ range, setRange, section, setSection }) => {
  const getLabelForValue = (value) => {
    if (value <= 5) {
      return 'Not important at all';
    } else if (value <= 24) {
      return 'There are more important things'
    } else if (value <= 49) {
      return 'I like music';
    } else if (value <= 74) {
      return 'I love music';
    } else {
      return 'Music is life';
    }
  };
  return (
    <>
      <label htmlFor="myRange">
          How important is music to you in life?
        <input
          type="range"
          min="1"
          max="100"
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="slider"
          name="importance"
          list="markers"
          id="myRange" />
      </label>
      <datalist id="markers">
        <option value="0" />
        <option value="25" />
        <option value="50" />
        <option value="75" />
        <option value="100" />
      </datalist>
      <p>{getLabelForValue(range)}</p>
      <PreviousButton
        section={section}
        setSection={setSection}
        whatQuestionPrevious="secondQuestion" />
      <NextButton
        whatQuestionNext="fourthQuestion"
        section={section}
        setSection={setSection}
        defaultState=""
        currentState={range}
        message="Please adjust the slider first" />
    </>
  )
}
export default QuestionDropdownMenu;