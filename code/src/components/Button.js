import React from 'react'

export const Button = props => {
  const { onClick, title } = props

  return (
    <div className='submit-button-container'>
      <button onClick={onClick} className='submit-button' type='submit' form=''>{title}</button>
    </div>
  )
}