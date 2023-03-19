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
        <option value="Apple">Apple</option>
        <option value="Cherry">Cherry</option>
        <option value="Rasberry">Rasberry</option>
        <option value="Lemon">Lemon</option>
      </select>
    </form>
  )
}
