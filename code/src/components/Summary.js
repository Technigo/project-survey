import React, { useState } from 'react'
import './box.css'

export const Summary = (props) => {

  return (
    <section className='box'>
      <h3>Summary</h3>
      <p>You live in a {props.house} with {props.number} plants and your favourite plant is {props.favourite}.</p>
    </section>
  )
}

