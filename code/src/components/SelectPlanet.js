import React, {useState} from 'react'

export const SelectPlanet = () => {
  const [Planet, setSelectPlanet] = useState('')

  const onPlanetSelect = (event) => {
    setSelectPlanet(event.target.value)
   
   
  }
  
  return (
    <div>
      <label htmlFor='planets'>Pick a planet</label>
        <select 
        id='planets'
        onChange={onPlanetSelect}
        value={Planet}
        
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