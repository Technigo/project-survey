import React from 'react'

const CountryInputRadioButton = ({ country, onCountryChange }) => { 
 
    return (
        <div>
          
          <label key={country} htmlFor={country}>
            <input 
              name="country"
              id={country}
              value={country}
              type="radio"
              onChange={onCountryChange} 
              required
            />
          {country}</label>
        </div>
    )
}

export default CountryInputRadioButton
  