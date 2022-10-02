/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const PriceQuestionOne = ({ price1, setPrice1, step }) => {
  return (
    <div className="question-div priceQ1">
      <div className="picture1-div">
        .
      </div>
      <h2>What is the price range you would pay for this item?</h2>
      <h1>current price1: {price1}</h1>
      <form className="question-form">
        <select
          id="priceSelect1"
          className="price-select"
          value={price1}
          onChange={(event) => setPrice1(event.target.value)}>
          <option value="">Select price interval:</option>
          <option value="100-200">100-200 SEK</option>
          <option value="200-300">200-300 SEK</option>
          <option value="300-400">300-400 SEK</option>
        </select>
      </form>
      <p>Current Step: {step}/7</p>
    </div>

  )
}
export default PriceQuestionOne
