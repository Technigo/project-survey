import React from 'react';

import './RangeSlider.css'

const RangeSlider = ({ range, setRange }) => {

  return (
    <form className="range-slider">
      <label htmlFor="range" tabIndex="0">
      <h4 className="range-slider-heading">On a scale from 1 to 10: How much do you miss live music?
      </h4>
        <input 
          className="range"
          type="range" 
          min="1" 
          max="10" 
          // value="1"
          start={range} 
          onChange={(event) => setRange(event.target.value)}
          id="range"
          list="tickmarks">
        </input>
            <datalist className="tickmarks" id="tickmarks">
              <option value="1" label="1"></option>
              <option value="2" label="2"></option>
              <option value="3" label="3"></option>
              <option value="4" label="4"></option>
              <option value="5" label="5"></option>
              <option value="6" label="6"></option>
              <option value="7" label="7"></option>
              <option value="8" label="8"></option>
              <option value="9" label="9"></option>
              <option value="10" label="10"></option>
            </datalist>
      </label>
    </form>
  )
}
export default RangeSlider;



