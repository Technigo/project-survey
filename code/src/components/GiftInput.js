import React from 'react'

export const GiftInput = ({ state, handleInput }) => {

  return (

  <legend>Gifts

    <label>
      <input
        type='radio'
        name='gift'
        value='Yes'
        onChange={handleInput}
        checked={state === 'Yes'}
        required
        />
        Yes
      </label>

    <label>
      <input
        type='radio'
        name='gift'
        value='No'
        onChange={handleInput}
        checked={state === 'No'}
        required
        />
        No
      </label>
  </legend>
  
  )
}