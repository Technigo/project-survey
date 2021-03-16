import React from 'react'

export const Heading = (props) => {
  return (
    <header>
      <h1>My Important Survey</h1>
      <h2>{props.subheading}</h2>
    </header>
  )
}