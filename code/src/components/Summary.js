import React from 'react'

const Summary = (props) => {
  return (
    <>
      <h2>Your name is {props.name}!</h2>
      <h2>Your temperature is {props.temperature}!</h2>
      <h2>Your favourite color is {props.color}!</h2>
    </>
  )
}
export default Summary