import React, { useState } from 'react'

export const Input1 = ({setActivity, activity}) => {
 
  const onActivityChange =(event) => {
    console.log(`This is activity: ${activity} This is target value ${event.target}`)
    setActivity(event.target.value)
  }
  
  return (
    <div>
      <h3>
        Favourite vacation activity
      </h3>
      <input 
        type="text"
        onChange={(event) => {onActivityChange(event)}}
        value={activity}
      >
      </input>
    </div>
  )
}