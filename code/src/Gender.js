import React from 'react';

export const Gender = props => {
  const { gender, setGender } = props;

  return (
    <form onSubmit={event => event.preventDefault()}>
      <label>
        What's your gender:
     <select
          className="gender-options"
          onChange={event => setGender(event.target.value)}
          value={gender}
        >
          <option value="">Select </option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="neutral">Neutral</option>
        </select>
      </label>
    </form>
  );
};
