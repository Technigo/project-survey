/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const PriceQuestionThree = ({ price3, setPrice3 }) => {
  return (
    <div className="question-price">
      <div className="picture3-div" />
      <h2>What price range would you expect to pay for this set of items?</h2>
      <form className="question-form">
        <select
          id="priceSelect3"
          className="price-select"
          value={price3}
          onChange={(event) => setPrice3(event.target.value)}>
          <option value="">Select price interval:</option>
          <option value="50-100">50-100 SEK</option>
          <option value="100-200">100-200 SEK</option>
          <option value="200-300">200-300 SEK</option>
        </select>
      </form>
      <p>Your Anser: {price3} SEK</p>
    </div>

  )
}

export default PriceQuestionThree

