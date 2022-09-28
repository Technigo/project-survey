import React from 'react';

export const LengthThree = ({ length, setLength }) => {
  const handleLengthChange = (event) => {
    setLength(event.target.value);
  }
  return (
    <form>
      <p>How far is it from your home to school/work?</p>
      <input
        type="text"
        onChange={handleLengthChange}
        Value={length} />
    </form>
  )
}