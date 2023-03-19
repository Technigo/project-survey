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
        <option value="Rainbow-sprinkles">Rainbow-Sprinkles</option>
        <option value="Caramel-crunch">Caramel-Crunch</option>
        <option value="Glitter-confetti">Glitter-Confetti</option>
        <option value="Cookie-crumbles">Cookie-crumbles</option>
        <option value="Silver-spark">Silver-Spark</option>
      </select>
    </form>
  )
}
