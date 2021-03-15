import React from 'react'

export const RadioButton = () => {

  return (
    <div>
      <p>Would you like to move there?</p>
      <label htmlFor='yes'>Yes!</label>
      <input id='yes' type='radio'/>
      <label htmlFor='no'>No!</label>
      <input id='no' type='radio'/>
    </div>
  )
} 