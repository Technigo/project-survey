import React from 'react';


const Selector = (props) => {
  return (
    <div className="selector-wrapper">
      <label htmlFor="breed">
        {props.label}
      </label>
      <select
        className="selector"
        id="breed"
      >
      {props.array.map((breed) => {
        return <option>{breed}</option>
      })}
      </select>
    </div>
  )
}

export default Selector