import React from 'react';

const StartSlider = ({ sliderValue, setSliderValue }) => {
  const readSlider = (event) => {
    setSliderValue(event.target.value);
  };

  return (

    <div>
      <h2>Sweet</h2>
      <input
        type="range"
        min="1"
        max="80"
        step="0.1"
        value={sliderValue}
        onChange={readSlider} />
      <h2>Salty</h2>
    </div>
  );
}

export default StartSlider;