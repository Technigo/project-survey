import React from 'react';
import NextButton from './Button';
import PreviousButton from './PreviousButton'

const Page5 = ({ counter, setCounter, yesNews, setYesNews }) => {
  return (
    <div className="leftbox">
      <div className="leftboxChild">
        <p>Would you like to opt for targeted discounts and special offers in the future?</p>
        <input
          type="checkbox"
          checked={yesNews}
          onChange={(event) => setYesNews(event.target.checked)} />
        <div className="button-container">
          <NextButton counter={counter} setCounter={setCounter} />
          <PreviousButton counter={counter} setCounter={setCounter} />
        </div>
      </div>
    </div>

  )
}

export default Page5;