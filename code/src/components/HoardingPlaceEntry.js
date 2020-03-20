import React from 'react'
import './hoardingPlace.css'

export const HoardingPlaceEntry = ({place, setPlace}) => {
  return (
    <form className="hoarding-place">
      <h2>Where do you prefer to stock up?</h2>
      <select className="hoarding-select"
        onChange={event => setPlace(event.target.value)}
        value={place} 
      >
        <option value=''>Hoarding Place:</option>
        <option value="supermarket">Supermarket</option>
        <option value='local store'>Local Store</option>
        <option value='oneline shop'>Oneline Shoppping</option>
      </select>
    </form>
  )
}

