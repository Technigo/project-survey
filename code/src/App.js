import React, { useState } from 'react'
import { Summary } from './components/Summary'
import { Dropdown } from './components/Dropdown'
import { Radio } from './components/Radio'

const cities = [
  'London',
  'New York',
  'Paris',
  'Madrid'
]

export const App = () => {
  const[name, setName] = useState("");
  const [color, setColor] = useState()
  const[showSummary, setShowSummary] = useState(false)
  const [city, setCity] = useState();
  
  const  handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true)
    
  };
  
    return (
    <div className="app">
      <h1> Welcome!</h1>
      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          <label>Please enter your name
            <input
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
            />
          </label>
          <label>
            <select
              onChange={event => setColor(event.target.value)}
              value={color}
            >
              <option value=''>Select Color</option>
              <option value="blue">Blue</option>
              <option value='red'>Red</option>
              <option value='yellow'>Yellow</option>
              <option value='green'>Green</option>
            </select>
            </label>
            <div className="radio">
              
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
            </div>
            <button type="submit">Submit</button>
            

          </form>
      ) : (
        <Summary name={name} color={color} city={city}/>
      )}
    </div>
  );
};


