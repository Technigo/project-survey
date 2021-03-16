import React, { useState } from 'react'

const Buttons = (props) => {
  console.log(props.prevQ)
  
  return (
    <>
      <button onClick={props.prevQ}>Previous question</button>
      <button onClick={props.nextQ}>Next question</button>
    </>
  )
}
export default Buttons