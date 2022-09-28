import React from 'react';

export const Size = ({ size, setSize }) => {
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div>
      <p>
        What size do you want?
      </p>
      <form>
        <select value={size} onChange={handleSizeChange}>
          <option value="">Select size</option>
          <option value="L">Large</option>
          <option value="M">Medium</option>
          <option value="S">Small</option>
        </select>
      </form>
    </div>
  );
};