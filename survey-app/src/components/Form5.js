import React, { useState } from 'react'

const StressRange = ({ changePage, retrieveStressData }) => {
  const [stress, setStress] = useState();

  return (
    <section className='page'>
      <h2><span className='symbols'>5. </span>
        If you had the opportunity to work in a flexible
        <span className='block'>work environment, would you feel less stressed?
          <span className='symbols'> *</span>
        </span></h2>
      <p>0 = no change
        <span className='text-right'>5 = very productive</span>
      </p>
      <form>
        <label htmlFor='stressRange'>
          <input
            type='range'
            id='stressRange'
            min='0'
            max='5'
            defaultValue='0'
            onChange={event => setStress(event.target.value)}
          />
          <p className='numbers'>
            <span>0</span>
            <span className='numbers-right'>5</span>
          </p>
        </label>
      </form>
      <button
        disabled={!stress}
        onClick={() => {
          changePage();
          retrieveStressData(stress)
        }}>Next
      </button>
    </section>
  )
}

export default StressRange;
