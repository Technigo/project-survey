import React, { useState } from 'react';

export const Time = ({whenNext}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    whenNext();
  }
  return(
  <form onSubmit={handleSubmit}>
    <label>
      Hej jag är sida 3
      <select name="" id=""></select>
    </label>
    <button type="submit" className="sub-button">NEXT</button>
  </form>
  )
}