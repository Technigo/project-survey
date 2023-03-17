import React from 'react';
import './Name.css';

export const Name = ({ name, setName }) => {
  const handleNameChange = (event) => {
    console.log(event.target.value);
    const upCaseUserName = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
    setName(upCaseUserName);
  };
  return (
    <fieldset className="name-wrapper">
      <legend>Enter your name:</legend>
      <section>
        <input
          type="text"
          id="name-input"
          className="name-input"
          name="name"
          onChange={handleNameChange}
          value={name}
          placeholder="Enter name here"
          maxLength={30}
          required />
      </section>
    </fieldset>
  );
};
