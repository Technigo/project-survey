import React from 'react';

export const Language = ({ language, setLanguage }) => {
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value)
    }
    return (
        <>
        <p>LANGUAGE</p>
        <select onChange={handleLanguageChange} value={language} >
        <option disabled value="">Select language here </option>
        <option value="English">English </option>
        <option value="Swedish">Swedish </option>
        <option value="Spanish">Spanish </option>
        </select>
        </>
    );
}