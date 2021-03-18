import React from 'react'

export const DropDown = (props) => {
   
  return (
  <div className="dropdown">
    <label htmlFor="dropdown">What´s your favorite transportation: </label>
    <select 
      id="dropdown"
      value={props.dropDown}
      onChange={props.onDropDown}  
    >
    <option disabled></option>  
    <option>Plane</option>
    <option>Train</option>
    <option>Boat</option> 
    <option>Car</option> 
    </select>      
  </div>
  )
}