import React from 'react'
import 'summary.css'

export const Summary = (props) => {
  const { animalLover, vacation, food } = props
  return (
    <section className="summary">
    <h2>You in a nutshell:</h2>
      <p>You are {animalLover} lover!</p>
      <p>Your dream vacation is {vacation}</p>
      <p>Your favorite food is {food}. Yum!</p>
    </section>
  )
}
