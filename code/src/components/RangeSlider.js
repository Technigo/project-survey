import React, { useState } from 'react';

const RangeSlider = () => {

  const [range, setRange] = useState(1); //WHAT GOES HERE?

  return (
    <form>
      <label htmlFor="range" tabIndex="0">On a scale from 1 to 10: How much do you miss live music?
        <input 
          type="range" 
          min="1" 
          max="10" 
          start={range} 
          onChange={(event) => setRange(event.target.value)}
          className="range" 
          id="range"
          list="tickmarks">
        </input>
            <datalist id="tickmarks">
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



