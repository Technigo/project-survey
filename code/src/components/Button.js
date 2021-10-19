import React from 'react'

export const Button = props => {
  return (
    <>
      <button onClick={props.incrementStep}>Next</button>
      <p>Step number: {props.step}</p>
    </>
  )
}
