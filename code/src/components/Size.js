import React from 'react'

export const Size = ({ size, setSize }) => {
  const handleSizeChange = (event) => {
    setSize(event.target.value)
  }
  return (
    <div>
      <p>What dog size would you prefer to adopt?</p>
      <input type="radio" value="small" checked={size === 'small'} onChange={handleSizeChange} /> Small
      <input type="radio" value="medium" checked={size === 'medium'} onChange={handleSizeChange} /> Medium
      <input type="radio" value="big" checked={size === 'big'} onChange={handleSizeChange} /> Big
    </div>
  );
}
