import React, { useState } from 'react'
import 'component/questionone.css'
import 'component/fonts.css'


export const QuestionOne = ({ whenNext }) => {
  const [ option , setOption ] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    whenNext(option)
  }

  const reservationOptions = ['Book a table', 'Take away']

  return (
    <form onSubmit={handleSubmit}>

      <h1>Question 1</h1>
      <p>{reservationOptions[0]} or {reservationOptions[1]}?</p>

      <section className="formOptions">
        {reservationOptions.map((item) => (
            <label key={item}>
              <input
                className="formRadio"
                type = "radio"
                value = {item}
                onChange = {(event) => setOption(event.target.value)}
                checked = {option === item} />
              {item}
            </label>
          ))}
        </section>
        
        <button type="submit" className="formBtn"> Next </button>
    </form>
  )
}