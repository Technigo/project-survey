import React from 'react'

export const Button = (props) => {
  return (
    <div className='submit-button-container'>
      <button onClick={props.onClick} className='submit-button' type='submit' form=''>{props.title}</button>
    </div>
  )
}