import React, { useState } from 'react'

const StressRange = ({ changePage, retrieveStressData }) => {
  const [stress, setStress] = useState();

  return (
    <section className='page'>
      <h2>4. If you had the opportunity to work in a flexible work environment, would you feel less stressed?</h2>
      <form>
        <label htmlFor='stressRange'>
          on a scale from 0 (no change) - 5 (less stressed)
        <input
          type='range'
          id='stressRange'
          min='0'
          max='5'
          defaultValue='0'
          onChange={event => setStress(event.target.value)}
        />
        </label>
      </form>
      <button disabled={!stress} onClick={() => { changePage(); retrieveStressData(stress) }}>Next</button>
    </section>
  )
}

export default StressRange;
