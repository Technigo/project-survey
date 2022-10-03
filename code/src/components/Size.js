import React from 'react';

export const Size = ({ size, setSize }) => {
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <form required onSubmit={(event) => event.preventDefault()}>
      <p>
        What size of the confetti do you want?
      </p>
      <select value={size} onChange={handleSizeChange}>
        <option value="">Select size</option>
        <option value="15">Large</option>
        <option value="9">Medium</option>
        <option value="5">Small</option>
      </select>
    </form>
  );
};