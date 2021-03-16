import React, { useState } from 'react';

const Selector = (props) => {
  const [breed, setBreed] = useState("")
  const onBreedChange = (event) => {
    console.log(breed)
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
        {props.array.map((breedName, index) => {
          if (index === 0) {
            return <option key={breedName} value="" disabled={true}>{breedName}</option>
          }
          else {
            return <option key={breedName} value={breedName}>{breedName}</option>
          }
        })}
      </select>
      <p>Here is the breed we picked: {breed}</p>
    </div>
  )
}

export default Selector