import React from 'react'

export const NameInput = ({ state, handleInput }) => {

  return (

    <label htmlFor='name'>What is the name of the birthday kid?
      <input 
        type='text'
        name='name'
        placeholder='name'
        value={state.name}
        onChange={handleInput} 
      />
    </label>   
  )
}