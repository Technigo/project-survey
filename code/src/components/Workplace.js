import React from 'react';

export const Workplace = ({ workplace, setWorkplace }) => {
  const handleWorkplaceChange = (event) => {
    setWorkplace(event.target.value);
  }
  return (
    <label htmlFor="workplace" className="workplace-label">
      <p>Where do you work?</p>
      <br />
      <input
        type="radio"
        name="workplace"
        value="Office"
        onChange={(e) => setWorkplace(e.target.value)}
        required />
        Office
      <br />
      <br />
      <input
        type="radio"
        name="workplace"
        value="Warehouse"
        onChange={(e) => setWorkplace(e.target.value)}
        required />
        Warehouse worker
      <br />
      <br />
      <input
        type="radio"
        name="workplace"
        value="Shop"
        onChange={(e) => setWorkplace(e.target.value)}
        required />
        Shop
      <br />
      <input
        id="workplace"
        value={workplace}
        onChange={handleWorkplaceChange}
        readOnly
        className="input-field" />
    </label>
  )
}