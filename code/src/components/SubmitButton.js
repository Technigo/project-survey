import React from 'react'

export const SubmitButton = ({personality}) => {
  return (
    <div className='submit-button-container'>
      <button 
        className='submit-button'
        type='submit' 
        disabled={personality === ''}
        >
        Submit
      </button>
    </div>
  )
}