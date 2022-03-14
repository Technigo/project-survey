import React, { useState } from 'react';

const AgeInput = ({ changePage, retrieveAgeData }) => {
  const [ageGroup, setAgeGroup] = useState();

  return (
    <section className='page'>
      <h2>1. How old are you?</h2>
      <form>
        Age Groups:
        <label htmlFor='18-24-input'>
          <input
            type='radio'
            value='18-24'
            id='18-24-input'
            onChange={event => setAgeGroup(event.target.value)}
            checked={ageGroup === '18-24'}
          />
          18-24
        </label>
        <label htmlFor='25-34-input'>
          <input
            type='radio'
            value='25-34'
            id='25-34-input'
            onChange={event => setAgeGroup(event.target.value)}
            checked={ageGroup === '25-34'}
          />
          25-34
        </label>
        <label htmlFor='35-44-input'>
          <input
            type='radio'
            value='35-44'
            id='35-44-input'
            onChange={event => setAgeGroup(event.target.value)}
            checked={ageGroup === '35-44'}
          />
          35-44
        </label>
        <label htmlFor='45-input'>
          <input
            type='radio'
            value='45+'
            id='45-input'
            onChange={event => setAgeGroup(event.target.value)}
            checked={ageGroup === '45+'}
          />
          45+
        </label>
      </form>
      <button disabled={!ageGroup} onClick={() => { changePage(); retrieveAgeData(ageGroup) }}>Next</button>
    </section>
  )
}

export default AgeInput;
