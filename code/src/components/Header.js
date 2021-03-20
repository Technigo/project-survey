import React from 'react'

export const Heading = (props) => {
  return (
    <header className="header">
      <h2>My Important Survey</h2>
      <h1>{props.heading}</h1>
    </header>
  )
}