import React from 'react';

export const Slider = ({ slider, setSlider }) => {
  const handleSliderChange = (event) => {
    setSlider(event.target.value);
  }
  return (
    <div className="slidecontainer">
      <p>Do you like this workplace?<br /> Please input here how much: <span>{slider}%</span></p>
      <input
        type="range"
        min="1"
        max="100"
        value={slider}
        onChange={handleSliderChange}
        id="slider" />
    </div>
  )
}