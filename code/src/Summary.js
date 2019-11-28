import React, { useState } from 'react'

export const Summary = (props) => {
  return (
    <div className="summary">
      <h2>Thank you for your answers {props.name}</h2>
      <p>#1 {props.age} years</p>
      <p>#2 {props.food}</p>
      <p>#3 {props.artist}</p>
      <p>#4 {props.tvseries}</p>
    </div>
  )
}