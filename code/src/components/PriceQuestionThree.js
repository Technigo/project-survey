/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const PriceQuestionThree = ({ price3, setPrice3, step }) => {
  return (
    <div className="question-div priceQ3">
      <h1>current price3: {price3}</h1>
      <form className="question-form">
        <select
          id="priceSelect3"
          className="price-select"
          value={price3}
          onChange={(event) => setPrice3(event.target.value)}>
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

export default PriceQuestionThree

