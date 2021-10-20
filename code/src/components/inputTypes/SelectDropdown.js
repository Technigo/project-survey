import React from "react"

const SelectDropdown = ({optionValue, setOptionValue, valueArray}) => {
  return (
  <div onSubmit= {event => event.preventDefault()}>
        <select
          onChange= {event => setOptionValue(event.target.value)}
          value= {optionValue}
        >
          <option disabled value="">Select an option: </option>
          {valueArray.map((item) => {
            return (
              <option key={item.value} value={item.value}>{item.description}</option>
            )
          })}
        </select>
      </div>
  )    
}

export default SelectDropdown