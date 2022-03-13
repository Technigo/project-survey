import React, { useState } from 'react'

const ProductivityRange = ({ changePage }) => {
  const [productivity, setProductivity] = useState();

  return (
    <section className='page'>
      <h2>4. If you had the opportunity to work in a flexible work environment, would you be more productive?</h2>
      <form>
        <input 
          type='range'
          min='0'
          max='5'
          onChange={(event) => setProductivity(event.target.value)}
        />
      </form>
      <p><span>no change</span><span>more productive {productivity}</span></p>
      <button onClick={() => { changePage() }}>Next</button>
    </section>
  )
}

export default ProductivityRange;