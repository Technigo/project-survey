import React from 'react'
import './summary.css'

export const Summary = (props) => {
  const { name, experience, time, work, framework } = props

  return (
    <article className="summary-container">
      <h2>Summary</h2>
      <section>
        <p className="summary"><span className="summary-bold">{name}</span>, I think we have got you figured out!</p>
        <p className="summary">You have been working with frontend development for <span className="summary-bold">{experience}</span>, that is awesome! You prefer coding <span className="summary-bold">{time}</span> and like <span className="summary-bold">{work}</span>. Your favourite framework is <span className="summary-bold">{framework}</span>.</p>
        <p className="summary">Thank you <span className="summary-bold">{name}</span> for taking this survey!</p>
      </section>
    </article>
  )
}