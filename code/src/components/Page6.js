/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import NextButton from './Button';
import PreviousButton from './PreviousButton'

const Page6 = ({ counter, setCounter, satisfaction, setSatisfaction }) => {
  const checkboxScore = [
    '1',
    '2',
    '3',
    '4',
    '5'
  ]
  return (
    <div className="leftboxChild">
      <form>
      How likely are you to recommend Fox-in-a-box™,
      1 being the lowest probability and 5 being the highest?
        {checkboxScore.map((choice) => (
          <label key={choice}>
            <input
              type="radio"
              value={choice}
              onChange={(event) => setSatisfaction(event.target.value)}
              checked={satisfaction === choice} />
            {choice}
          </label>
        ))}
      </form>
      <div className="button-container">
        <NextButton counter={counter} setCounter={setCounter} />
        <PreviousButton counter={counter} setCounter={setCounter} />
      </div>
    </div>
  )
}

export default Page6;