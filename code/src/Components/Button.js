import React from 'react'

import './button.css'


export const Button = (props) => {
  const {animalLover, food, vacation} = props
  return (
    <section className='button-section'>
      <button className='btn' type='submit' disabled={animalLover === '' || food === '' || vacation === ''}>Submit!</button>
    </section>
  )
}