import React from 'react';

export const Shape = ({ shape, setShape }) => {
  const handleShapeChange = (event) => {
    setShape(event.target.value);
  }
  return (
    <>
      <p>What would you call the shape to the right?</p>
      <input type="text" value={shape} onChange={handleShapeChange} />
    </>
  );
}