import React from 'react';

const TypeOfSnack = ({ tasteGroup, type, setType }) => {
  if (tasteGroup === ('Sweet')) {
    return (
      <form>
        <p>Choose a type of snack</p>
        <select
          onChange={(event) => setType(event.target.value)}
          value={type}>
          <option value="" disabled>Type</option>
          <option value="Candy">Candy</option>
          <option value="Nuts">Nuts</option>
          <option value="Fruit">Fruit</option>
        </select>
      </form>
    )
  } else if ((tasteGroup === ('Sour')) || (tasteGroup === ('Salty'))) {
    return (
      <form>
        <p>Choose a type of snack</p>
        <select
          onChange={(event) => setType(event.target.value)}
          value={type}>
          <option value="" disabled>Type</option>
          <option value="Candy">Candy</option>
          <option value="Fruit">Fruit</option>
          <option value="Chips">Chips</option>
        </select>
      </form>
    )
  } else {
    return (
      <form>
        <p>Choose a type of snack</p>
        <select
          onChange={(event) => setType(event.target.value)}
          value={type}>
          <option value="" disabled>Type</option>
          <option value="Nuts">Nuts</option>
          <option value="Chips">Chips</option>
        </select>
      </form>
    )
  }
}

export default TypeOfSnack;