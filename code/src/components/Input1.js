import React from 'react'

export const Input1 = ({setActivity, activity}) => {
 
  const onActivityChange =(event) => {
    setActivity(event.target.value)
  }
  
  return (
    <div>
      <h3>
        Favourite vacation activity 🏄
      </h3>
      <label>
        Type:
        <input 
          type="text"
          onChange={(event) => {onActivityChange(event)}}
          value={activity}
          aria-label='Enter your favourite activity here'
        />
      </label>
    </div>
  )
}