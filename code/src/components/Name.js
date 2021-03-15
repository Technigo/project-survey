import React, { useState } from 'react'

export const Name = () => {
  const [inputName, setInputName] = useState ('')

  const onNameChange = (event) => {
    console.log(event)
    setInputName(event.target.value)
  }


  return (
    <div>
      <label htmlFor='name'>What is your name?</label>
      <input 
        id='name' 
        type='text'
        value={inputName}
        onChange={onNameChange}
      />
    </div>

  )
}