import React, {useState} from 'react'

export const Select = () => {
  const [selectPlanet, setSelectPlanet] = useState('')

  const onPlanetSelect = (event) => {
    setSelectPlanet(event.target.value)
    console.log(event.target.value)
   
  }
  
  return (
    <div>
      <label htmlFor='planets'>What is your favourite planet in the solar system?</label>
        <select 
        id='planets'
        value={selectPlanet}
        onChange={onPlanetSelect}
        >
          <option>Mercury</option>
          <option>Venus</option>
          <option>Tellus</option>
          <option>Mars</option>
          <option>Jupiter</option>
          <option>Saturn</option>
          <option>Uranus</option>
          <option>Neptune</option>
          <option>Pluto</option>
        </select>
    </div>
  )
}