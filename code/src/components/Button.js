import React from 'react'

export const Button = (props) => {
  return (
    <div className='submit-container'>
      <button onClick={props.onClick} className='submit-button' type='submit' form=''>Submit</button>
    </div>
  )
}