import React from 'react'

const CountryInputRadioButton = ({ countryValue, onCountryChangeFunction }) => { 
 
    return (
        <div>
          
          <label key={countryValue} htmlFor={countryValue}>
            <input 
              name="country"
              id={countryValue}
              value={countryValue}
              type="radio"
              onChange={onCountryChangeFunction} 
              required
            />
          {countryValue}</label>
        </div>
    )
}

export default CountryInputRadioButton
  