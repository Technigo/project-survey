import React from 'react'

export const RadioButton = (props) => {  

  return (
  <div className="radiobtn">
      <p>What type of trip you prefer:</p> 
      {props.typeOfTrip.map(trip => ( 
        <label key={trip}>
          <input
          name="radio"
          type="radio"
          value={trip}
          onChange={props.onRadioClicked}
          checked={props.radioValue===trip}
          />
          {trip}
          </label>
      ))}    
  </div> 
  )
      } 
