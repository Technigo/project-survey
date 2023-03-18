/* eslint-disable linebreak-style */
import React from 'react';

const genderOptions = ['Male', 'Female', 'Non-binary'];

export const Gender = ({ gender, setGender }) => {
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }
  return (
    <form>
      <p>What do you identify as?</p>
      {genderOptions.map((genderType) => (
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        <label key={genderType}>
          <input
            type="radio"
            value={genderType}
            onChange={handleGenderChange}
            checked={gender === genderType}
            required="required" />
          {genderType}
        </label>
      ))}
    </form>
  );
}