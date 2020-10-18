import React from 'react'

export const Summary = (props) => {
  const { name } = props
  return (
    <div className="questions-summary">
      <h3>Summary</h3>
      <p>{name}</p>
    </div>
  )
}