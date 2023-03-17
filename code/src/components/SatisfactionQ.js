/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton'

const SatisfactionQ = ({ counter, setCounter, setSatisfaction }) => {
  return (
    <div className="textboxChild">
      <form className="slidersatisfaction" aria-label="a slider to rate satisfaction with fox-in-a-box">
        <p>
          How likely are you to recommend Fox-in-a-box™,
        1 being the lowest probability and 5 being the highest?
        </p>
        <div className="textboxChild">
          <label htmlFor="slider" aria-label="score one and up">1</label>
          <input
            type="range"
            id="slider"
            name="slider"
            min="1"
            max="5"
            step="1"
            onChange={(event) => setSatisfaction(event.target.value)} />
          <label htmlFor="slider" aria-label="score five and down">5</label>
        </div>
      </form>
      <div className="button-container">
        <NextButton counter={counter} setCounter={setCounter} />
        <PreviousButton counter={counter} setCounter={setCounter} />
      </div>
    </div>
  )
}

export default SatisfactionQ;