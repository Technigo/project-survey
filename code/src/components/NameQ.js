import React from 'react';

const NameQ = ({ name, OnNameInputChange, nextQ }) => {
  return (
    <form onSubmit={nextQ}>
      <label htmlFor="nameInput"><h2>Hi there! What is your name?</h2>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Type name here..."
          value={name}
          onChange={OnNameInputChange}
          autoComplete="off"
          required />
      </label>
      <button type="submit" label="next">Next</button>
    </form>
  )
}

export default NameQ