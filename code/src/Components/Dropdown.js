import React from "react"

export const Dropdown = (props) => {

  const { option, setOption, } = props

  return (
    <>
      <h2 tabIndex="0">Where would you like to go?</h2>
      <select
        className="options"
        id="options"
        onChange={event => setOption(event.target.value)}
        value={option}
      >
        <option tabIndex="0" value="">Select an option</option>
        <option tabIndex="0" value="Africa">Africa</option>
        <option tabIndex="0" value="Antartica">Antartica</option>
        <option tabIndex="0" value="Asia">Asia</option>
        <option tabIndex="0" value="Europe">Europe</option>
        <option tabIndex="0" value="North America">North America</option>
        <option tabIndex="0" value="Oceania">Oceania</option>
        <option tabIndex="0" value="South America">South America</option>
      </select>
    
    </>
  )
}