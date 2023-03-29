
import React from 'react';

export const Company = ({ company, setCompany }) => {
  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  return (
    <>
      <p>Mentors Current Company </p>
      <select value={company} onChange={handleCompanyChange}>
        <option value="">Select Company</option>
        <option value="Volvo">Volvo</option>
        <option value="H-M">H&M Group</option>
        <option value="Spotify">Spotify</option>
        <option value="AstraZeneca">astraZeneca</option>
        <option value="Start-up">Start-Up</option>
      </select>
    </>
  );
};