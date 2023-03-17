import React from 'react';
import './Name.css';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    console.log(event.target.value);
    const upCaseUserName = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setName(upCaseUserName);
  };
  return (
    <section className="name-wrapper">
      <label htmlFor="name-input">
      Enter name:
        <input
          type="text"
          id="name-input"
          className="name-input"
          onChange={handleNameChange}
          value={name}
          placeholder="Enter name here"
          required />
      </label>
    </section>
  );
};
