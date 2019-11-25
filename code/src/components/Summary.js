import React from 'react'

export const Summary = (props) => {
  return (
    <div className="summary">
      <h2>Thank you for your answers {props.name}!</h2>
      <p>1: {props.place}</p>
      <p>2: {props.fruit}</p>
    </div>
  )
}