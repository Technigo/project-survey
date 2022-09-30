/* eslint-disable linebreak-style */
import React from 'react';

export const NameOfDate = ({ nameOfDate, setNameOfDate }) => {
  const handleNameOfDateChange = (event) => {
    setNameOfDate(event.target.value);
  }

  return (
    <div className="dateNameContainer">
      <form onSubmit={(event) => event.preventDefault()}>
        <h3 className="dateNameText"> Who are you taking out tonight? {nameOfDate}</h3>
        <input
          type="text"
          onChange={handleNameOfDateChange}
          value={nameOfDate} />
      </form>
    </div>
  );
}
