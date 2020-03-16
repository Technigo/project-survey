import React, { useState } from 'react'
import 'component/questionthree.css'

export const QuestionThree = ({ whenNext }) => {
  const [ time, setTime ] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    whenNext(time)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Question 3</h1>
      <p>When do you want to come?</p>

      <section className="formOptions">
        <select name="Choose" value={time} onChange={(event) => setTime(event.target.value)}>
          <option value=""> Choose Time</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="other">Other time</option>
        </select>
      </section>
      
      <button type="submit" className="formBtn"> Next </button>
    </form>
  )
}