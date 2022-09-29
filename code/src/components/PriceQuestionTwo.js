/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

// This is the firstquestion thats comes up

/* const priceIntervals = [
  '200 - 300 SEK',
  '300 - 400 SEK',
  '400 - 500 SEK'
]; */

const PriceQuestionTwo = ({ price, setPriceInterval }) => {
  const handlePriceIntervalChange = (event) => {
    setPriceInterval(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="question-div priceQ2">
      <h1>current price2: {price} SEK</h1>
      <select>
        <option label="100-200SEK" value="100-200 SEK" selected="selected" onChange={() => handlePriceIntervalChange('100-200 SEK')} />
        <option label="200-300 SEK" value="100-200 SEK" onChange={(e) => handlePriceIntervalChange(e)} />
      </select>
      <button type="button" onClick={() => setPriceInterval('200-300')} value=""> 200-300 SEK</button>
      <button type="button" onClick={() => setPriceInterval('300-400')} value=""> 300-400 SEK</button>
      <button type="button" onClick={() => setPriceInterval('400-500')} value=""> 400-500 SEK</button>
    </div>
  )
}

export default PriceQuestionTwo

