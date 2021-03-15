import React from 'react'

export const Background = (props) => {


  return (
    <div>
      <img className= 'background-image' src={props.image} alt='stars'/>
    </div>
  )
}