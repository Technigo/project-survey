import React from 'react'

export const Summary = (props) => {
  
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.radioValue}</p>
      <p>{props.dropDown}</p>
    </div>

  )
}