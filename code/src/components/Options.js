import React from 'react'


const Options = ({setOptions, options}) => {

  return (
    <div className="survey-item options">
      <label className="section-heading" htmlFor="option">How would you like your coffee?</label>
      <select onChange={(e) => {setOptions(e.target.value)}} id="option" value={options}>
        <option disabled>Choose below</option>
        <option>with milk</option>
        <option>with sugar</option>
        <option>with sweetner</option>
        <option>black</option>
        <option>with a milky non-diary</option>
      </select>
    </div>
  )
}

export default Options