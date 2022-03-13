import React, { useState } from 'react'

const StressRange = ({ changePage }) => {
  const [stress, setStress] = useState();

  return (
    <section className='page'>
      <h2>4. If you had the opportunity to work in a flexible work environment, would you feel less stressed?</h2>
      <form>
        <input
          type='range'
          min='0'
          max='5'
          onChange={(event) => setStress(event.target.value)}
        />
        <p><span>no change</span><span>less stressed {stress}</span></p>
      </form>
      <button onClick={() => {changePage()}}>Next</button>
    </section>
  )
}

export default StressRange;