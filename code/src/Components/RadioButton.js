import React, { useState } from 'react'

const typeOfTrip = ['Winter', 'Sun']

export const RadioButton = () => {
  const [radioValue, SetRadioValue] = useState()

  const onRadioClicked = (event) => {
    console.log(event.target.value)
    SetRadioValue(event.target.value)
  }

  return (
  <div className="radiobtn">
      <p>What type of trip you prefer:</p> 
      {typeOfTrip.map(trip => ( 
        <label key={trip}>
          <input
          name="radio"
          type="radio"
          value={trip}
          onChange={onRadioClicked}
          checked={radioValue===trip}
          />
          {trip}
          </label>
      ))}    
  </div> 
  )
      } 
