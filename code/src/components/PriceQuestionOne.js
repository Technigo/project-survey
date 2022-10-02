/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const PriceQuestionOne = ({ price1, setPrice1 }) => {
  return (
    <div className="container">
      <div className="question-price">
        <div className="picture1-div" />
        <h2>What price range would you expect to pay for this item?</h2>
        <form className="question-form">
          <select
            id="priceSelect1"
            className="price-select"
            value={price1}
            onChange={(event) => setPrice1(event.target.value)}>
            <option value="">Select price interval:</option>
            <option value="100-200">100-200 SEK</option>
            <option value="200-400">200-400 SEK</option>
            <option value="400-500">400-500 SEK</option>
            <option value="500-600">500-600 SEK</option>
            <option value="600-700">600-700 SEK</option>
          </select>
        </form>
        <p> Your answer: {price1} SEK</p>
      </div>
    </div>

  )
}
export default PriceQuestionOne
