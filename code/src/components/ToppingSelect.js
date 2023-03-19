import React from 'react';
// eslint-disable-next-line indent
        // eslint-disable-next-line indent

export const ToppingSelect = ({ toppingSelect, setToppingSelect }) => {
  return (
    <form className="content-wrapper">
      <p>Your favourite Ice Cream topping?</p>
      <select
        className="dropDown"
        onChange={(event) => setToppingSelect(event.target.value)}
        value={toppingSelect}>
        <option value="rainbow-sprinkles">Rainbow-Sprinkles</option>
        <option value="caramel-crunch">Caramel-Crunch</option>
        <option value="glitter-confetti">Glitter-Confetti</option>
        <option value="cookie-crumbles">Cookie-crumbles</option>
        <option value="silver-spark">Silver-Spark</option>
      </select>
    </form>
  )
}
