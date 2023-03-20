import React from 'react';
// eslint-disable-next-line indent
        // eslint-disable-next-line indent

export const FruitSelect = ({ fruitSelect, setFruitSelect }) => {
  return (
    <form className="content-wrapper">
      <p>Your favourite ice cream flavour?</p>
      <select
        className="dropDown"
        onChange={(event) => setFruitSelect(event.target.value)}
        value={fruitSelect}>
        <option value="Apple Pie">Apple Pie</option>
        <option value="Cherry Cream">Cherry Blossom</option>
        <option value="Rasberry Cake">Rasberry Cake</option>
        <option value="Lemon Cheesecake">Lemon Cheesecake</option>
      </select>
    </form>
  )
}
