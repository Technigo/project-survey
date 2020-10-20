import React from 'react'
import './Summary.css'

export const Summary = (props) => {
  const { name, season, selected, value, email } = props
  return (
    <section className="questions-summary">
      <h3>Summary</h3>
      <p>Hello, {name}</p>
      <p>Your favorit season is {season} I love that season too</p>
      <p>You have experienced {season} somewhere between {selected} </p>
      <p>You like {season} this much {value} </p>
      <p>You will shortly recieve a summary of your answers to {email}</p>
    </section>
  )
}