import React from 'react';
import './horror.css';

export const Horror = ({ horror, setHorror }) => {
  const handleHorrorChange = (event) => {
    setHorror(event.target.value);
  }
  return (
    <div className="horror-container">
      <p>What is the worst thing you can image?</p>
      <form>
        <select
          onChange={handleHorrorChange}
          value={horror}>
          <option value="">Select horror:</option>
          <option value="snakes">Being pushed into a snake pit.</option>
          <option value="pinapple">Pinapple on pizza.</option>
          <option value="airplane">Falling out of an airplane.</option>
        </select>
      </form>
    </div>
  )
}