import React from 'react'

export const LocationInput = ({ state, handleInput }) => {
  
  return (
    <label htmlFor='location'>Location
        <input 
        type='text'
        name='location'
        placeholder='location'
        value={state}
        onChange={handleInput} 
        />
    </label>
  )
}