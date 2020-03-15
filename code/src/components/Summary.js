/* eslint-disable linebreak-style */
import React from 'react'
import './summary.css'

export const Summary = (props) => {
  return (
    <article className="summary-container">
      <h2>Summary</h2>
      <section className="summary">
        <p className="summary-q">What comes into mind when you think about the color Blue?</p>
        <p className="summary-a">{props.mind}</p>
        <p className="summary-q">Do you like the color Blue?</p>
        <p className="summary-a">{props.like}</p>
        <p className="summary-q">What are your feelings associated with the color Blue?</p>
        <p className="summary-a">{props.feeling}</p>
        <p className="summary-q">Blue are the words I say and what I think</p>
        <p className="summary-a">{props.dabadee}</p>
        <p className="summary-q">Who is your favourite Blue member?</p>
        <p className="summary-a">{props.blue}</p>
      </section>
    </article>
  )
}