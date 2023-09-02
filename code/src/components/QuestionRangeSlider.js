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
      On a scale from 0 to 100, how much do you love music?
        <input
          type="range"
          min="1"
          max="100"
          value={range}
          onChange={(e) => setRange(e.target.value)}
          name="lovesMusic"
          aria-label="Select a value"
          id="myRange" />
      </label>
      <div>
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