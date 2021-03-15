import React from 'react'

export const Select = (props) => {
  return (
    <div>
      
     <label htmlFor='planets'>What is your favourite planet in the solar system?</label>
     <select id='planets'>
       <option>Mercury</option>
       <option>Venus</option>
       <option>Tellus</option>
       <option>Mars</option>
       <option>Juspiter</option>
       <option>Saturn</option>
       <option>Uranus</option>
       <option>Neptune</option>
       <option>Pluto</option>
     </select>
     
    
    </div>
  )
}