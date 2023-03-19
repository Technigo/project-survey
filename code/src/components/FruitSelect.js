import React from 'react';
// eslint-disable-next-line indent
        // eslint-disable-next-line indent

export const FruitSelect = ({ fruitSelect, setFruitSelect }) => {
  return (
    <form className="content-wrapper">
      <p>Your favourite fruit?</p>
      <select
        className="dropDown"
        onChange={(event) => setFruitSelect(event.target.value)}
        value={fruitSelect}>
        <option value="apple">Apple</option>
        <option value="cherry">Cherry</option>
        <option value="rasberry">Rasberry</option>
        <option value="lemon">Lemon</option>
      </select>
    </form>
  )
}
