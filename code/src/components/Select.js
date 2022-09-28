import React from 'react';

export const Select = ({ location, setLocation }) => {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <select
        onChange={(event) => setLocation(event.target.value)}
        value={location}>
        <option value="">Select location:</option>
        <option value="stockholm">Stockholm</option>
        <option value="barcelona">Barcelona</option>
        <option value="oslo">Oslo</option>
      </select>
    </form>
  );
}
