import React from 'react';
// eslint-disable-next-line indent
        // eslint-disable-next-line indent

export const ToppingSelect = ({ toppingSelect, setToppingSelect }) => {
  return (
    <form>
      <p>Your favourite Ice Cream topping?</p>
      <select
        onChange={(event) => setToppingSelect(event.target.value)}
        value={toppingSelect}>
        <option value="sprinkles">Sprinkles</option>
        <option value="caramel-crunch">Cherry</option>
        <option value="star-sprinkles">Rasberry</option>
        <option value="cookie-crumbles">Apple</option>
        <option value="silver-glitter">Apple</option>
      </select>
    </form>
  )
}
