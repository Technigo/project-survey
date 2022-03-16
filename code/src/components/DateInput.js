import React from 'react'

export const DateInput = ({ text, inputName, state, handleInput }) => {
  
  return (
    <>
      <h3>When will the party take place?</h3>
      <label htmlFor={inputName}>{text}
        <input 
        type='date'
        name={inputName}
        value={state}
        onChange={handleInput} 
        /> 
      </label>  
    </>
  )
}