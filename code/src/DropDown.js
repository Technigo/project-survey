import React from 'react';

const DropDown = ({ place, onPlaceChange }) => {
  return (
    <section className='dropdown'>
      <h2 tabIndex='0'>Where are you located?</h2>
      <select tabIndex='0' className='dropdown-options' value={place} onChange={onPlaceChange}>
        <option value=''>Select a place</option>
        <option value='Stockholm county'>Stockholm county</option>
        <option value='Uppsala county'>Uppsala county</option>
        <option value='Somewhere else in Sweden'>Somewhere else in Sweden</option>
        <option value='Somewhere else in Europe'>Somewhere else in Europe</option>
        <option value='Somewhere else in the world'>Somewhere else in the world</option>
      </select>
    </section>
  );
};

export default DropDown;