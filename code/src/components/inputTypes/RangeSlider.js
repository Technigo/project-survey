import React from "react"
import './RangeSlider.css'

const RangeSlider = ({value, setValue, min, max}) => {
  return (
    <div className="range-slider-container">
      <span className="range-slider-span">{min}</span>
      <input className="range-slider"
        type="range"
        onChange= {event => setValue(event.target.value)}
        value= {value}
        min={min} 
        max={max}
      /> 
      <span className="range-slider-span">{max}</span>
    </div>
  )
}

export default RangeSlider