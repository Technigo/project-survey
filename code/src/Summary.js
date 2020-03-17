import React from 'react'

export const Summary = (props) => {
  const { animalLover, vacation, food } = props
  return (
    <section>
    <h1>Summary:</h1>
      <p>You are {animalLover} lover!</p>
      <p>Your dream vacation is {vacation}</p>
      <p>Your favorite food is {food}. Yum!</p>
    </section>
  )
}
