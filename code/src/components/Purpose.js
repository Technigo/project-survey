import React from 'react'

const Purpose = ({ options, setOptions, nextSlide, backSlide}) => {

    return (
     <section>
       <div className='form-container'>
        <h2>Purpose of stay</h2>
        <label htmlFor='option'></label>
        <select
          id='option'
          value={options}
          onChange={(event) => {setOptions(event.target.value)}}
        >
          <option disabled>choose below</option>
          <option>leisure travelling</option>
          <option>business appointment</option>
          <option>visiting friends</option>
          <option>other</option>
        </select>
        <div className='button-container'>
          <button className='button' onClick={backSlide}>
            back
          </button>
          <button className='button'
          disabled={options === 'choose below'}
          onClick={nextSlide}
          >
            next
          </button>
        </div>
       </div> 
     </section> 
    )
  }
  
  export default Purpose
