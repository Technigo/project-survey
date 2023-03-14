import React from 'react';

export const Place = ({ place, setPlace }) => {
  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  }
  return (
    <div>
      <p>Which place do you prefer?</p>
      <form>
        <select
          onChange={handlePlaceChange}
          value={place}>
          <option value="">Select location:</option>
          <option value="stockholm">Stockholm</option>
          <option value="barcelona">Barcelona</option>
          <option value="oslo">Oslo</option>
        </select>
      </form>
    </div>
  )
}