import React from 'react'

export const Summary = (props) => {

  return (
    <div>
      <p>Hi {props.name}!</p>
      <p>So you´re more into {props.radioValue} trips, that´s nice!</p>
      <p>Yeah, {props.dropDown} is a sweat transportation</p>
    </div>

  )
}