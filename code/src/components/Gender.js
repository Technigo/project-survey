import React from 'react';

export const Gender = ({ gender, setGender }) => {
  const handleGender = (event) => {
    setGender(event.target.value);
  }
  return (
    <form>
      <select
        onChange={handleGender}
        value={gender}>
        <option value=" ">Gender:</option>
        <option value={gender}>Woman</option>
        <option value={gender}>Man</option>
        <option value={gender}>Other</option>
      </select>
    </form>
  );
}

export default Gender;