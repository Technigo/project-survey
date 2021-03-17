import React from 'react';
import StartNextButton from './StartNextButton';

const CountrySelector = ({setSection, question, country, setCountry, countries}) => {

  const onCountryChange = (event) => {
    setCountry(event.target.value)
  }
  return (
    <div className="selector-wrapper">
      <h3>Where would you like to go?</h3>
      <label htmlFor="country">
      Choose a country  
      </label>
      <select
        className="selector"
        id="coutry"
        value={country}
        onChange={onCountryChange}
      >
        {countries.map((countryName, index) => {
          if (index === 0) {
            return <option key={countryName} value="" disabled={true}>{countryName}</option>
          }
          else {
            return <option key={countryName} value={countryName}>{countryName}</option>
          }
        })}
      </select>
      <p>Here is the country you picked: {country}</p>
      <StartNextButton
      question={question}
      setSection={setSection}
      button="Next"
      />
    </div>
  )
}

export default CountrySelector