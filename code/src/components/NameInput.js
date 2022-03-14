import React from 'react'

export const NameInput = ({ text, state, handleInput }) => {

  return (

    <label htmlFor='name'>{text}
      <input 
        type='text'
        name='name'
        placeholder='name'
        value={state}
        onChange={handleInput} 
      />
    </label>   
  )
}