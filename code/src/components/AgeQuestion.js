import React from 'react';

const AgeQuestion = ({ yearsOfAge, setYearsOfAge }) => {
  return (
    <select
      className="dropdown-select"
      onChange={(event) => setYearsOfAge(event.target.value)}
      value={yearsOfAge}
      required>
      <option disabled value="">What is your age?</option>
      <option value="18-35 years old">18-35 years old</option>
      <option value="36-50 years old">36-55 years old</option>
      <option value="51-65 years old">51-65 years old</option>
      <option value="66+ years old">66+ years old</option>
    </select>
  );
};
export default AgeQuestion

