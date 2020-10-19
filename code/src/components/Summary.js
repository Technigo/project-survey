import React from 'react'

export const Summary = (props) => {
  const { name, season, selected, checked } = props
  return (
    <div className="questions-summary">
      <h3>Summary</h3>
      <p>Hello, {name}</p>
      <p>Your favorit season is {season} I love that season too</p>
      <p>{selected}, greate age!</p>
      <p>{checked} glad that you are happy!</p>
    </div>
  )
}