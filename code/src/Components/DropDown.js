import React, { useState } from 'react'

export const DropDown = () => {
    const [dropDown, setDropDown] = useState('')

    const onDropDown = (event) => {
      console.log(event.target.value)
      setDropDown(event.target.value)
    }
  return (
  <div>
    <label htmlFor="dropdown">Choose</label>
    <select 
      id="dropdown"
      value={dropDown}
      onChange={onDropDown}  
    >
    <option>Obt1</option>
    <option>Obt2</option>
    <option>Obt3</option> 
    </select>   
  </div>
  )
}