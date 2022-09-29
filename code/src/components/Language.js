/* eslint-disable linebreak-style */
import React from 'react';

export const Language = ({ language, setLanguage }) => {
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value)
    }
    return (
        <>
        <p className="question">What language do you want?</p>
        <select onChange={handleLanguageChange} value={language}>
        <option disabled value="">Select language here </option>
        <option value="English" checked={language === 'English'} onChange={handleLanguageChange} aria-label="First option">English </option>
        <option value="Swedish" checked={language === 'Swedish'} onChange={handleLanguageChange}aria-label="Second option">Swedish </option>
        <option value="Spanish" checked={language === 'Spanish'} onChange={handleLanguageChange}aria-label="Third option">Spanish </option>
        </select>
        </>
    );
}