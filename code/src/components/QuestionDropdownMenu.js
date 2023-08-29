/* eslint-disable max-len */
import React from 'react';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton';

const QuestionDropdownMenu = ({ selectedOption, setSelectedOption, section, setSection }) => {
  return (
    <>
      <label htmlFor="dropdownMenu">
          How often do you listen to music?
        <select
          id="dropdownMenu"
          name="musicUsage"
          value={selectedOption} // force the select's value to match the state variable and update the state variable on any change
          onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="daily">Daily</option>
          <option value="weekly">Once a week</option>
          <option value="monthly">Once a month</option>
          <option value="yearly">Once a year</option>
        </select>
      </label>
      <PreviousButton
        section={section}
        setSection={setSection}
        whatQuestionPrevious="secondQuestion" />
      <NextButton
        whatQuestionNext="fourthQuestion"
        section={section}
        setSection={setSection} />
    </>
  )
}
export default QuestionDropdownMenu;