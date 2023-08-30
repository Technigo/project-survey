/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable max-len */
import React from 'react';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

import 'styles/form.css'

const QuestionDropdownMenu = ({ range, setRange, section, setSection }) => {
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
            id="myRange" />
        </div>
      </label>
      <div className="buttons__wrapper">
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
      </div>
    </>
  )
}

export default QuestionDropdownMenu;