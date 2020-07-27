import React from 'react'
import './hoardingPlace.css'

export const HoardingPlaceEntry = ({place, setPlace}) => {
  return (
    <div className='hoarding-place'>
      <h2>Where do you prefer to stock up?</h2>
      <select className='hoarding-select'
        onChange={event => setPlace(event.target.value)}
        value={place} 
      >
<<<<<<< HEAD
        <option value=''>Hoarding Place:</option>
        <option value='supermarket'>Supermarket</option>
=======
        <option value='' disabled>Hoarding Place:</option>
        <option value="supermarket">Supermarket</option>
>>>>>>> 3c78cef7e913298ba7ad52c0414c27e9a5707cdc
        <option value='local store'>Local Store</option>
        <option value='online shop'>Online Shopping</option>
      </select>
    </div>
  )
}
