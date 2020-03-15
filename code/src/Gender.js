import React from 'react';

export const Gender = props => {
  const { gender, setGender } = props;

  return (
    <form onSubmit={event => event.preventDefault()}>
      What's your gender:
      <select onChange={event => setGender(event.target.value)} value={gender}>
        <option value=''>Select </option>
        <option value='Female'>Female</option>
        <option value='Male'>Male</option>
        <option value='Neutral'>Neutral</option>
      </select>
    </form>
  );
};

export default Gender;
