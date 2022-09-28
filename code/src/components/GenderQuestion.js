import React, { useState } from 'react';

const GenderQuestion = () => {
  const [gender, setGender] = useState('');

  return (
    <form>
      <h3>Gender</h3>
      <span> Male
        <input type="radio" id="Male" checked={gender === 'Male'} value="Male" onClick={() => setGender('Male')} />
      </span>
      <span>Female
        <input type="radio" id="Female" checked={gender === 'Female'} value="Female" onClick={() => setGender('Female')} />
      </span>
      <span>Other
        <input type="radio" id="Other" checked={gender === 'Other'} value="Other" onClick={() => setGender('Other')} />
      </span>
      <p>You are {gender}</p>
    </form>
  );
}

export default GenderQuestion