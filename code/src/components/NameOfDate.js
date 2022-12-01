/* eslint-disable linebreak-style */
import React from 'react';

export const NameOfDate = ({ nameOfDate, setNameOfDate }) => {
  const handleNameOfDateChange = (event) => {
    setNameOfDate(event.target.value);
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h3> Who are you taking out tonight? </h3>
      <input
        className="nameField"
        type="text"
        placeholder="Name of your date"
        onChange={handleNameOfDateChange}
        value={nameOfDate} />
    </form>
  );
}
