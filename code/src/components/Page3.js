import React from 'react';
import NextButton from './Button';
import PreviousButton from './PreviousButton'

const Page3 = ({ counter, setCounter, date, setDate }) => {
  return (
    <div className="leftboxChild">
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

export default Page3;