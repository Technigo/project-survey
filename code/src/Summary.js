import React from 'react'

export const Summary = (props) => {
  return (
    <article>
      <p>Name: {props.name}</p>
      <p>Option: {props.option}</p>
      <p>Fun: {props.funScale}</p>
      <p>Slide: {props.slide}</p>
    </article>
  )
}