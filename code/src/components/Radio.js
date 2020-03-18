import React, { useState } from 'react'

const cities = [
  'London',
  'New York',
  'Paris',
  'Madrid'
]

export const Radio = () => {
  const [city, setCity] = useState();

  return (
    <form>
      Cities: 
      {cities.map((town) => (
        <label key={town}>  
          <input  
          type="radio"
          value={town}
          onChange={(event) => setCity(event.target.value)}
          checked={city === town}
          />
          {town}
        </label>
      ))}
      
    </form>
  );
};