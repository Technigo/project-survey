import React from 'react';

const PriceSlider = ({ priceValue, setPriceValue }) => {
  const readSlider = (event) => {
    setPriceValue(event.target.value);
  };

  return (

    <div className="sliderContainer">
      <h3>How much do you spend on an average snackrun?</h3>
      <input
        type="range"
        min="0.75"
        max="15"
        step="0.25"
        value={priceValue}
        onChange={readSlider} />
      <p>{priceValue}€</p>
    </div>
  );
}

export default PriceSlider;