/* eslint-disable linebreak-style */
import React from 'react';

export const NameOfDate = ({ nameOfDate, setNameOfDate }) => {
  const handleNameOfDateChange = (event) => {
    setNameOfDate(event.target.value);
  }

  return (
    <div className="questionsContainer">
      <form onSubmit={(event) => event.preventDefault()}>
        <h3> Who are you taking out tonight? </h3>
        <input
          className="nameField"
          type="text"
          onChange={handleNameOfDateChange}
          value={nameOfDate} />
      </form>
    </div>
  );
}
