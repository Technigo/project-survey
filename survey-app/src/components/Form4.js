import React, { useState } from 'react'

const ProductivityRange = ({ changePage, retrieveProductivityData }) => {
  const [productivity, setProductivity] = useState();

  return (
    <section className='page'>
      <h2>4. If you had the opportunity to work in a flexible work environment, would you be more productive?</h2>
      <form>
        <label htmlFor='productivityRange'> on a scale from 0 (no change) - 5 (more productive) </label>
        <input
          type='range'
          id='productivityRange'
          min='0'
          max='5'
          defaultValue='0'
          onChange={(event) => setProductivity(event.target.value)}
        />
      </form>
      <button disabled={!productivity} onClick={() => { changePage(); retrieveProductivityData(productivity) }}>Next</button>
    </section>
  )
}

export default ProductivityRange;
