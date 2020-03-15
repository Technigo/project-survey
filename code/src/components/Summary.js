import React from 'react'
import './summary.css'

export const Summary = (props) => {
  return (
    <section className="summary">
      <p>What comes into mind when you think about the color Blue?</p>
      <p>{props.mind}</p>
      <p>Do you like the color Blue?</p>
      <p>{props.like}</p>
      <p>What are your feelings associated with the color Blue?</p>
      <p>{props.feeling}</p>
      <p>Blue are the words I say and what I think</p>
      <p>{props.dabadee}</p>
      <p>Who is your favourite Blue member?</p>
      <p>{props.blue}</p>
    </section>
  )
}