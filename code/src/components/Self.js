import React from 'react';

export const Self = ({ self, setSelf }) => {
  const handleSelfSelection = (event) => {
    setSelf(event.target.value)
  }
  return (
    <>
      I consider myself to be
      <select value={self} onChange={handleSelfSelection}>
        <option disabled value="">Please select one:</option>
        <option value="no nonsense">no-nonsense</option>
        <option value="warm and welcoming">warm & welcoming</option>
        <option value="relaxed to the max">relaxed to the max</option>
        <option value="a go getter">a go-getter</option>
      </select>
    </>
  )
}