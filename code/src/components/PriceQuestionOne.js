/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const PriceQuestionOne = ({ price, setPrice }) => {
  return (
    <div className="question-div priceQ1">
      <h1>current price1: {price}</h1>
      <form className="question-form">
        <select
          id="priceSelect"
          className="price-select"
          value={price}
          onChange={(event) => setPrice(event.target.value)}>
          <option value="">Select price interval:</option>
          <option value="100-200 SEK">100-200 SEK</option>
          <option value="200-300 SEK">200-300 SEK</option>
          <option value="300-400 SEK">300-400 SEK</option>
        </select>
      </form>
    </div>

  )
}
export default PriceQuestionOne
