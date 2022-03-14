import React from 'react'

export const TextInput = ({ inputName, placeholder, text, state, handleInput }) => {

  return (

    <label htmlFor={inputName}>{text}
      <input 
        type='text'
        name={inputName}
        placeholder={placeholder}
        value={state}
        onChange={handleInput} 
      />
    </label>   
  )
}