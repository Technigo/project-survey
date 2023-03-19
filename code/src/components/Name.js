import React from 'react';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  return (
    // <div>
    <div className="container">
      <div Class="welcome">
        <h2>Welcome to this Astro survey</h2>
        <label htmlFor="name">
          <p>First of all, what´s your name?</p>
          <input type="text" id="name" value={name} onChange={handleNameChange} required />
        </label>
      </div>
    </div>
  )
}
/* NR 1 */