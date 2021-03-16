import React, { useState } from 'react'

export const TextInput = () => {
  const [name, SetName] = useState('')

  const onNameChange = (event) => {
    console.log(event.target.value)
    SetName(event.target.value)
  }

  return (
  <div>
    <label htmlFor="name-input">Your name: </label>

    <input 
      id="name-input"
      type="text"
      value={name}
      onChange={onNameChange}
      />
  </div>
  )
}