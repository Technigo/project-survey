import React from 'react';
import NextButton from './NextButton';
import PreviousButton from './PreviousButton'

const DateQ = ({ counter, setCounter, date, setDate }) => {
  return (
    <div className="textboxChild">
      <p>When did you make your purchase?</p>
      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)} />
      <div className="button-container">
        <NextButton counter={counter} setCounter={setCounter} />
        <PreviousButton counter={counter} setCounter={setCounter} />
      </div>
    </div>
  )
}

export default DateQ;