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
        <option value="woman">Woman</option>
        <option value="man">Man</option>
        <option value="other">Other</option>
      </select>
    </form>
  );
}

export default Gender;