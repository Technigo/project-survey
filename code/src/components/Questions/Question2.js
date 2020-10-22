import React from 'react';

// const lactoseInputs = ["yes", "no", "dunno"]


const Allergygroup = ({ userAllergy, onAllergyChange }) => {

  return (
    <div className="card">
      <h3 className="question">What is your current energylevel?</h3>
      <label htmlFor="100">100</label>
      <input
        id="100"
        type="checkbox"
        checked={userAllergy.includes('100')}
        onChange={() => onAllergyChange('100')}
      />
      <label htmlFor="80">80</label>
      <input
        id="80"
        type="checkbox"
        checked={userAllergy.includes('80')}
        onChange={() => onAllergyChange('80')}
      />
      <label htmlFor="50">50</label>
      <input
        id="50"
        type="checkbox"
        checked={userAllergy.includes('50')}
        onChange={() => onAllergyChange('50')}
      />
      <label htmlFor="again">What was the question again?</label>
      <input
        id="again"
        type="checkbox"
        checked={userAllergy.includes('again')}
        onChange={() => onAllergyChange('again')}
      />
    </div>
  );

};

export default Allergygroup;

