import React from 'react';

export const Workplace = ({ workplace, setWorkplace }) => {
  const handleWorkplaceChange = (event) => {
    setWorkplace(event.target.value);
  }
  return (
    <label htmlFor="workplace">
      <p>Where do you work?</p>
      <br />
      <input
        type="radio"
        name="workplace"
        value="office"
        onChange={(e) => setWorkplace(e.target.value)}
        required />
        Office
      <br />
      <br />
      <input
        type="radio"
        name="workplace"
        value="warehouse"
        onChange={(e) => setWorkplace(e.target.value)}
        required />
        Warehouse worker
      <br />
      <br />
      <input
        type="radio"
        name="workplace"
        value="shop"
        onChange={(e) => setWorkplace(e.target.value)}
        required />
        Shop
      <br />
      <input
        id="workplace"
        type="radio"
        value={workplace}
        onChange={handleWorkplaceChange} />
    </label>
  )
}