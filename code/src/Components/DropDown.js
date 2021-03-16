import React, { useState } from 'react'

export const DropDown = () => {
    const [dropDown, setDropDown] = useState('')

    const onDropDown = (event) => {
      console.log(event.target.value)
      setDropDown(event.target.value)
    }
  return (
  <div className="dropdown">
    <label htmlFor="dropdown">What´s your favorite transportation: </label>
    <select 
      id="dropdown"
      value={dropDown}
      onChange={onDropDown}  
    >
    <option>Plane</option>
    <option>Train</option>
    <option>Boat</option> 
    <option>Car</option> 
    </select>      
  </div>
  )
}