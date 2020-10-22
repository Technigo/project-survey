import React from "react"

export const Dropdown = (props) => {

  const { option, setOption, } = props

  return (
    <>
      <h2>Where would you like to go?</h2>
      <select
        className="options"
        id="options"
        onChange={event => setOption(event.target.value)}
        value={option}
      >
        <option value="">Select an option</option>
        <option value="Africa">Africa</option>
        <option value="Antartica">Antartica</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
      </select>
    
    </>
  )
}