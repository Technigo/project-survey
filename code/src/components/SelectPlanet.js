import React from 'react'


export const SelectPlanet = ({planet, setPlanet}) => {
  
  const onPlanetSelect = (event) => {
    setPlanet(event.target.value)
   
  }
  
  return (
    <div>
      <label htmlFor='planets'>Pick a planet</label>
        <select 
        id='planets'
        onChange={(event) => {onPlanetSelect(event)}}
        value={planet}
        required
        >
          <option disabled></option>
          <option>Mercury</option>
          <option>Venus</option>
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