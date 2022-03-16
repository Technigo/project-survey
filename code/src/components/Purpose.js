import React from 'react'

const Purpose = ({ options, setOptions, nextSlide, backSlide}) => {

    return (
      <div id='options'>
        <label htmlFor='option'>Purpose of stay</label>
        <select 
          onChange={(event) => {setOptions(event.target.value)}}
          id='option'
          value={options}>
          <option disabled>Choose below</option>
          <option>Leisure travelling</option>
          <option>Business appointment</option>
          <option>Visiting friends</option>
          <option>Other</option>
        </select>
        <div>
          <button className='button' onClick={backSlide}>
            Back
          </button>
          <button className='button' onClick={nextSlide}>
            Next
          </button>
        </div>
      </div>
    )
  }
  
  export default Purpose
