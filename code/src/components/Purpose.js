import React from 'react'

const Purpose = ({ options, setOptions, nextSlide, backSlide}) => {

    return (
     <section>
        <h2>Purpose of stay</h2>
        <label htmlFor='option'></label>
        <select
          onChange={(event) => {setOptions(event.target.value)}}
          id='option'
          value={options}>
          <option disabled>choose below</option>
          <option>leisure travelling</option>
          <option>business appointment</option>
          <option>visiting friends</option>
          <option>other</option>
        </select>
        <div>
          <button className='button' onClick={backSlide}>
            back
          </button>
          <button className='button' onClick={nextSlide}>
            next
          </button>
        </div>
     </section> 
    )
  }
  
  export default Purpose
