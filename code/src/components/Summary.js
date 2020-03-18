import React from 'react'
import './summary.css'

export const Summary = (props) => {
  const { name, experience, time, work, framework } = props

  return (
    <article className="summary-container">
      <h2>Summary</h2>
      <section className="summary">
        <p className="summary-q">{name}, I think we have got you figured out!</p>
        <p className="summary-q">You have been working with frontend development for {experience}, that is awesome! You prefer coding {time} and like {work}. Your favourite framework is {framework}.</p>
        <p className="summary-q">Thank you {name} for taking this survey!</p>
      </section>
    </article>
  )
}