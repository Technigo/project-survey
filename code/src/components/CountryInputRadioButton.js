import React from 'react'

const CountryInputRadioButton = ({ countryValue, onCountryChangeFunction }) => { 
 
    return (
        
        <fieldset>
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
        </fieldset>  
        
    )
}

export default CountryInputRadioButton
  