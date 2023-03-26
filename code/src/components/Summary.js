import React from 'react'

export const Summary = ({ name, experience, size }) => {
  return (
    <div>
      <p>Your name: {name}</p>
      <p>Previous dog experience: {experience}</p>
      <p>Prefered size to adopt: {size}</p>
    </div>
  )
}
