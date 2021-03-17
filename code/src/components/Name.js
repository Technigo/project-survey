import React, { useState } from 'react'

export const Name = () => {
  const [inputName, setName] = useState('')
  
  

  const onNameChange = (event) => {
    setName(event.target.value)
  
  }

  return (
    <div>
      <label htmlFor="name">What is your name?</label>
      <input 
        id="name"
        type='text'
        value={inputName}
        onChange={onNameChange}
      />
    </div>
  )
}