import React, { useState } from 'react'

export const TextInput = () => {
  const [name, SetName] = useState('')

  const onNameChange = (event) => {
    console.log(event.target.value)
    SetName(event.target.value)
  }

  return (
  <div className="text-input">
    <label htmlFor="name-input">What´s your name: </label>
    <input 
      id="name-input"
      type="text"
      value={name}
      onChange={onNameChange}
      />
      </div>    
  )
}