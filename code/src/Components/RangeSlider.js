import React from 'react'

export const RangeSlider = (props) => {
  return (   
    <div className="range-slider">
      <input
        type="range"
        min="1"
        max="100"
        Value={props.rangeSlider}
        onChange={props.setRangeSlider}
        class="slider"
        id="myRangeSlider"
        tabindex="0"
        >        
      </input>
    </div>
  )
}