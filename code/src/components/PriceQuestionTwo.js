/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const PriceQuestionTwo = ({ price2, setPrice2 }) => {
  return (
    <div className="question-price">
      <div className="picture2-div" />
      <h2>What price range would you expect to pay for this item?</h2>
      <p className="product-description">Baby Cable Knit sweater. Size 0-3 months. 100% merino whool.</p>

      <form className="question-form">
        <select
          id="priceSelect2"
          className="price-select"
          value={price2}
          onChange={(event) => setPrice2(event.target.value)}>
          <option value="">Select price interval:</option>
          <option value="100-200">100-200 SEK</option>
          <option value="200-300">200-300 SEK</option>
          <option value="300-400">300-400 SEK</option>
        </select>
      </form>
      <p>Your answer: {price2} SEK</p>
    </div>

  )
}

export default PriceQuestionTwo

