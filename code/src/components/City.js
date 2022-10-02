import React from 'react';


export const City = ({ city, setCity }) => {
  const handleCityChange = (event) => {
    setCity(event.target.value);
  }

  return ( 
  <form>
    <label for="City" name="city" >
        <h3>Country the course is taken:</h3>
    <select
        onChange={handleCityChange} value={city} >
        <option disabled value=''>Select an option:</option>
        <option value='Spain'>Spain</option>
        <option value='Portugal'> Portugal</option>
        <option value='Italy'> Italy</option>
    </select>
    </label>
    </form>
 );
}



