import React from 'react';

const Name = ({ name, onNameChange }) => {
  return (
    <div>
      <section className="name-dropdown" type="dropdown">
        <h2>Choose your name!</h2>
        <select value={name} onChange={onNameChange}>
          <option disabled value="">
            Names
          </option>
          <option>Aria Shadowheart</option>
          <option>Finn Stormblade</option>
          <option>Arin Stonefist</option>
          <option>Lyra Nightingale</option>
          <option>Roran Ironclad</option>
          <option>Niamh Wildflower</option>
          <option>Kael Sunsworn</option>
        </select>
      </section>
    </div>
  );
};

export default Name;
