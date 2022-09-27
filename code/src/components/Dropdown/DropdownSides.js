import React, { useState } from 'react';

const DropdownSides = () => {
  const [selected, setSelected] = useState('');

  return (
    <form>
      <select
        onChange={(event) => setSelected(event.target.value)}
        value={selected}>
        <option value="salad">Salad</option>
        <option value="bread">Bread</option>
      </select>
    </form>
  )
}

export default DropdownSides;