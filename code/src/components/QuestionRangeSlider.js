/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import React from 'react';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

import 'styles/form.css'

const QuestionDropdownMenu = ({ range, setRange, section, setSection }) => {
  const getLabelForValue = (value) => {
    if (value <= 25) {
      return 'There are more important things in life';
    } else if (value <= 75) {
      return 'I like listening to music';
    } else {
      return 'Music is love, music is life';
    }
  };
  return (
    <>
      <label htmlFor="myRange" className="form__question">
      On a scale from 0 to 100, how important is music to you?
        <div className="question__content-wrapper">
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
        </div>
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