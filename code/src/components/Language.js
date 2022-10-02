/* eslint-disable */
import React from 'react';

export const Language = ({ language, setLanguage }) => {
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value)
  }
  return (
    <>
      <p className="question">What language do you want?</p>
      <select className="language-selection" onChange={handleLanguageChange} value={language}>
        <option disabled value="">Select language here </option>
        <option value="English" aria-label="First alternative: English" checked={language === 'English'} onChange={handleLanguageChange}>English </option>
        <option value="Swedish" aria-label="Second alternative: Swedish" checked={language === 'Swedish'} onChange={handleLanguageChange}>Swedish </option>
        <option value="Spanish" aria-label="Third alternative: Spanish" checked={language === 'Spanish'} onChange={handleLanguageChange}>Spanish </option>
      </select>
    </>
  );
}