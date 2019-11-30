import React, { useState } from 'react';

export const Favorit = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.whenNext(2);
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