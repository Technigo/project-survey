import React from 'react';

const PriceSlider = ({ priceValue, setPriceValue }) => {
  const readSlider = (event) => {
    setPriceValue(event.target.value);
  };

  return (

    <div>
      <h3>Average price</h3>
      <input
        type="range"
        min="0.75"
        max="7"
        step="0.25"
        value={priceValue}
        onChange={readSlider} />
      <p>{priceValue}€</p>
    </div>
  );
}

export default PriceSlider;