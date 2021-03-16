import React from 'react'

export const Heading = (props) => {
  return (
    <header>
      <h1>My Survey</h1>
      <h2>{props.subheading}</h2>
    </header>
  )
}