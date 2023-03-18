import React from 'react';

export const Slider = ({ slider, setSlider }) => {
  const handleSliderChange = (event) => {
    setSlider(event.target.value);
  }
  return (
    <div className="slidecontainer">
      <p>How happy are you at work?<br /> Please input here: <span>{slider}%</span></p>
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