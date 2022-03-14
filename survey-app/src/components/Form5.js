import React, { useState } from 'react'

const StressRange = ({ changePage, retrieveStressData }) => {
  const [stress, setStress] = useState();

  return (
    <section className='page'>
      <h2>4. If you had the opportunity to work in a flexible work environment, would you feel less stressed?</h2>
      <form>
        <input
          type='range'
          min='0'
          max='5'
          onChange={event => setStress(event.target.value)}
        />
        <p><span>no change</span><span>less stressed</span></p>
        <p>The age range is {stress}</p>
      </form>
      <button onClick={() => { changePage(); retrieveStressData(stress) }}>Next</button>
    </section>
  )
}

export default StressRange;
