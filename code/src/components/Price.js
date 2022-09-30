import React from 'react';

const Price = (props) => {
  const { priceRange, onPriceRangeChange, prices, onCounterChange } = props

  return (
    <div className="container">
      <form className="price-slider">
        <h3>What do you think about the cost of our cakes?</h3>
        <input
          className="slider"
          type="range"
          min="0"
          max="4"
          value={priceRange}
          onChange={onPriceRangeChange} />
        <p>{prices}</p>
        <button
          type="button"
          className="button"
          onClick={onCounterChange}>Next Question
        </button>
      </form>
    </div>
  );
};

export default Price;