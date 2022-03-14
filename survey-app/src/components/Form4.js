import React, { useState } from 'react'

const ProductivityRange = ({ changePage, retrieveProductivityData }) => {
  const [productivity, setProductivity] = useState();

  return (
    <section className='page'>
      <h2><span className='symbols'>4. </span>
        If you had the opportunity to work in a flexible
        <span className='block'>work environment, would you be more productive?
          <span className='symbols'> *</span>
        </span></h2>
      <p>0 = no change
        <span className='text-right'>5 = very productive</span>
      </p>
      <form>
        <label htmlFor='productivityRange'>
          <input
            type='range'
            id='productivityRange'
            min='0'
            max='5'
            defaultValue='0'
            onChange={(event) => setProductivity(event.target.value)}
          />
          <p className='numbers'>
            <span>0</span>
            <span className='numbers-right'>5</span>
          </p>
        </label>
      </form>
      <button
        disabled={!productivity}
        onClick={() => {
          changePage();
          retrieveProductivityData(productivity)
        }}>Next
      </button>
    </section>
  )
}

export default ProductivityRange;
