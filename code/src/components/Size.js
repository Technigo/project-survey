import React from 'react';

export const Size = ({ size, setSize }) => {
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <form required onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="size-input">
        What size of the confetti do you want?
        <select value={size} onChange={handleSizeChange} id="size-input">
          <option value="">Select size</option>
          <option value="15">Large</option>
          <option value="9">Medium</option>
          <option value="5">Small</option>
        </select>
      </label>
    </form>
  );
};