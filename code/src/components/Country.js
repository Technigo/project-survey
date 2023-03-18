/* eslint-disable linebreak-style */
import React from 'react';

export const Country = ({ country, setCountry }) => {
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  return (
    <>
      <p>Where do you live?</p>
      <select value={country} onChange={handleCountryChange}>
        <option value=" ">Select a country</option>
        <option value="Sweden">Sweden</option>
        <option value="Norway">Norway</option>
        <option value="Denmark">Denmark</option>
        <option value="Finland">Finland</option>
      </select>
    </>
  )
}