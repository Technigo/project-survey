import React from 'react'

// This one aint being used right now. Can be implementen in next version. Needs to add hook and function then
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