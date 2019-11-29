import React, { useState } from 'react'

export const Summary = (props) => {
  return (
    <div className="summary">
      <h2>Thank you for your answers {props.name}</h2>
      <p>Age group: {props.age} years</p>
      <p>Favourite food: {props.food}</p>
      <p>Favourite artist: {props.artist}</p>
      <p>Favourite tv-series: {props.tvseries}</p>
      <p>How much you like Christmas: {props.christmas}</p>
    </div>
  )
}