import React from 'react'

export const Thanks = ({ name, colors, ammount, shape }) => {
  return (
    <>
      <p>Thanks so much, {name}!</p>
      <p>Your {ammount} {colors} shrimp are on their way.</p>
      <p>Hope they will like it in your {shape} aquarium!</p>
    </>
  )
}