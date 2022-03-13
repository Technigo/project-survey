import React, {useState} from 'react'

const AgeInput = ({changePage}) => {
  const [ageGroup, setAgeGroup] = useState();

  return (
    <section className='page'>
      <h2>1. How old are you?</h2>
      <form>
        Age Groups: 
        <label>
        <input 
          type='radio' 
          value='18-24' 
          onChange={event => setAgeGroup(event.target.value)}
          checked={ageGroup === '18-24'}
        />
        18-24
        </label>
        <label>
          <input 
            type='radio' 
            value='25-34'
            onChange={event => setAgeGroup(event.target.value)}
            checked={ageGroup === '25-34'}
          />
          25-34
        </label>
        <label>
          <input 
            type='radio' 
            value='35-44'
            onChange={event => setAgeGroup(event.target.value)}
            checked={ageGroup === '35-44'} 
          />
          35-44
        </label>
        <label>
          <input 
            type='radio' 
            value='45+'
            onChange={event => setAgeGroup(event.target.value)}
            checked={ageGroup === '45+'} 
          />
          45+
        </label>
        <button onClick={() => { changePage()}}>Next</button>
      </form>
    </section>
  )
}

export default AgeInput;