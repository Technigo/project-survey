/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const LoveCats = ({ love, setLove }) => {
  const handleLoveChange = (event) => {
    setLove(event.target.value)
  }

  return (
    <>
      <label htmlFor="love">How much do you love cats between 1 and 10?</label>
      <input
        id="love"
        type="text"
        value={love}
        onChange={handleLoveChange}
        aria-label="Love" />
    </>
  );
}
export default LoveCats;