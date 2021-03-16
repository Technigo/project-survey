import React, { useState } from 'react';

const Selector = (props) => {
  const [breed, setBreed] = useState("")
  const onBreedChange = (event) => {
    setBreed(event.target.value)
  }
  return (
    <div className="selector-wrapper">
      <label htmlFor="breed">
        {props.label}
      </label>
      <select
        className="selector"
        id="breed"
        value={breed}
        onChange={onBreedChange}

      >
        {props.array.map((breed, index) => {
          if (index === 0) {
            return <option key={breed} value="" disabled={true}>{breed}</option>
          }
          else {
            return <option key={breed} value={breed}>{breed}</option>
          }
        })}
      </select>
      <p>Here is the breed we picked: {breed}</p>
    </div>
  )
}

export default Selector