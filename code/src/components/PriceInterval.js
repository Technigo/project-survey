/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

// This is the firstquestion thats comes up
const priceIntervals = [
  '200 - 300 SEK',
  '300 - 400 SEK',
  '400 - 500 SEK'
];

const PriceInterval = ({ setPriceInterval }) => {
  const handlePriceIntervalChange = (event) => {
    setPriceInterval(event.target.value);
  }
  return (
    <form className="formContainer">
      <h1>What price interval would you be ready to pay for this item?</h1>
      <div className="question-div">{priceIntervals.map(
        (
          priceInterval // iterating through each venue available
        ) => {
          return (
            <div key={priceInterval} className="priceInterval-choice">
              <input
                value={priceInterval}
                onChange={handlePriceIntervalChange}
                type="select"
                id={priceInterval} />
            </div>);
        }

      )}
      </div>
    </form>
  )
}

export default PriceInterval