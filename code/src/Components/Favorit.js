import React, { useState } from 'react';

export const Favorit = ({whenNext}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    whenNext();
  }
  return (
    <form onSubmit={handleSubmit} action="">
      <label>
        Hej jag är sida 2.
        <input type="text"
        />
      </label>
      <button type="submit" className="next-button">NEXT</button>
    </form>
  )
}