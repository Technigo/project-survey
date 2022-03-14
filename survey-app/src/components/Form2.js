import React, { useState } from 'react'

const WorkHoursInput = ({ changePage, retrieveHoursData }) => {
  const [hours, setHours] = useState();

  return (
    <section className='page'>
      <h2><span className='symbols'>2. </span>
        Would you prefer a company that offers flexible work hours?
        <span className='symbols'> *</span>
      </h2>
      <form>
        <p>
          <label htmlFor='yesButton'>
            <input
              type='radio'
              value='yes'
              id='yesButton'
              onChange={event => setHours(event.target.value)}
              checked={hours === 'yes'}
            />
            Yes
          </label>
        </p>
        <p>
          <label htmlFor='noButton'>
            <input
              type='radio'
              value='no'
              id='noButton'
              onChange={event => setHours(event.target.value)}
              checked={hours === 'no'}
            />
            No
          </label>
        </p>
      </form>
      <button 
        disabled={!hours} 
        onClick={() => 
        { changePage(); 
        retrieveHoursData(hours) 
        }}>Next
      </button>
    </section>
  )
}

export default WorkHoursInput;
