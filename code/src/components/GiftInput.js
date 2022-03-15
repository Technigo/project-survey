import React from 'react'

export const GiftInput = ({ state, handleInput }) => {

  return (
  <fieldset className='radiobutton-wrapper'>
    <legend className='radio-legend'>Gifts

      <label className='radio'>
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

      <label className='radio'>
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
  </fieldset>
  )
}