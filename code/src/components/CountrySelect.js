import React from 'react';

import { Button } from './Button';

export const CountrySelect = ({setCountry, countryName}) => {
  const countries = ["Sweden", "Norway", "Denmark", "Finland"];
  const onCountryChange = (e) => {
    setCountry(e.target.value)
  }

  return (
    <>
      <label htmlFor="selectCountry" className="question-title" tabindex="0"><span className="arrow">➛</span> Where did you travel from?</label>
      <select
        id="selectCountry"
        name="country-select"
        value={countryName}
        className="select-country"
        onChange={onCountryChange}
        aria-label="Use up and down arrows to"
        required >
        <option value="">Choose country:</option>
        {countries.map(country => 
          <option 
            key={country} 
            value={country}>{country}</option>
        )}
      </select>
      <Button 
        button="CONTINUE" />
    </>
  )
}