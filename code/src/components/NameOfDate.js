import React from 'react';

export const NameOfDate = ({ nameOfDate, setNameOfDate }) => {
  const handleNameOfDateChange = (event) => {
    setNameOfDate(event.target.value);
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <h2>Who are you taking out tonight? {nameOfDate}</h2>
      <input
        type="text"
        onChange={handleNameOfDateChange}
        value={nameOfDate} />
    </form>
  );
}
