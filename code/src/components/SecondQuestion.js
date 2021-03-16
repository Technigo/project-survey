import React, { useState } from 'react'

import ThirdQuestion from './ThirdQuestion'
 
const SecondQuestion = () => {
  const [time, setTime] = useState('')
  const [submit, setSubmit] = useState(false)
 
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <p>Your favorite time to read</p>
      <select
      onChange={event => setTime(event.target.value)}
      value= {time} 
      >
        <option value="">Select a time:</option>
        <option value="morning">Morning</option>
        <option value="lunch">Lunch time</option>
        <option value="evening">Evening</option>
        <option value="vacation">Vacation</option>
      </select>

      <div>
        <button type="submit"
        onClick={() => setSubmit(true)}
        >NEXT 
        </button>
      </div>

      {submit && (
        <div>
        < ThirdQuestion/>   
      </div>
      )}

    </form>  

  )

}

export default SecondQuestion

