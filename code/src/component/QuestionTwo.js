import React, { useState } from 'react'
import 'component/questiontwo.css'

export const QuestionTwo = ({ whenNext }) => {
  const [ name , setName ] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    whenNext(name)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Question 2</h1>
      <p>Reservation name</p>

      <section className="formOptions">
        <input
        className = "formInput"
        type = "text"
        value = {name}
        onChange = {(event) => setName(event.target.value)} />
      </section>

      <button type="submit" className="formBtn"> Next </button>
    </form>
  )
}