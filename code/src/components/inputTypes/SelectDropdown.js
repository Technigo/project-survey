import React from "react"
import './SelectDropdown.css'

/* This is a custom Select component, that shows as many options as are given in the valueArray */
const SelectDropdown = ({optionValue, setOptionValue, valueArray}) => {
  return (
  <div>
    <select
      onChange= {event => setOptionValue(event.target.value)}
      value= {optionValue}
    >
      <option disabled value="">Select an option: </option>
      {valueArray.map((item) => {
        return (
          <option 
            key={item.value} 
            value={item.value}>{item.description}
          </option>
        )
      })}
    </select>
  </div>
  )    
}

export default SelectDropdown