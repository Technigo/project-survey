import React from 'react';


export const City = ({ city, setCity }) => {
  const handleCityChange = (event) => {
    setCity(event.target.value);
  }

  return ( 
    <label for="City" name="city" >
        <p>City center for course taken:</p>

    <select
        onChange={handleCityChange} value={city} >
        <option selected="">Select center</option>
        <option value='stockholm-center'>stockholm</option>
        <option value='oslo-center'> oslo</option>
        <option value='malmö-center'> malmö</option>
       
    </select>
    </label>
 );
}



