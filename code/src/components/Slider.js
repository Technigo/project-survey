import React from 'react';

const Slider = ({ slider, setSlider }) => {
  const handleSliderChange = (event) => {
    setSlider(event.target.value);
  }
  return (
    <div className="slide-container">
      <p>How happy are you in life?</p>
      <p>Please draw the slider here: <span>{slider}%</span></p>
      <input
        type="range"
        min="0"
        max="100"
        value={slider}
        onChange={handleSliderChange}
        id="slider" />
    </div>
  )
}

export default Slider;