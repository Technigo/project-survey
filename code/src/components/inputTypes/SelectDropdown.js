import React from "react"

const SelectDropdown = ({optionValue, setOptionValue, valueArray}) => {
  return (
  <form onSubmit= {event => event.preventDefault()}>
        <select
          onChange= {event => setOptionValue(event.target.value)}
          value= {optionValue}
        >
          <option disabled value="">Select an option: </option>
          {valueArray.map((item) => {
            return (
              <option value={item.value}>{item.description}</option>
            )
          })}
        </select>
      </form>
  )    
}

export default SelectDropdown