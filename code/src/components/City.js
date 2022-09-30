import React from 'react';


export const City = ({ city, setCity }) => {
  const handleCityChange = (event) => {
    setCity(event.target.value);
  }

  return ( 
    <label for="City" name="city" >
        <p>Location for course taken:</p>

    <select
        onChange={handleCityChange} value={city} >
        <option selected="">Select center</option>
        <option value='spain-center'>Spain</option>
        <option value='portugal-center'> Portugal</option>
        <option value='Italy-center'> Italy</option>
       
    </select>
    </label>
 );
}



