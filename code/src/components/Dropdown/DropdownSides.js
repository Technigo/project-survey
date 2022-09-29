import React, { useState } from 'react';

const DropdownSides = () => {
  const [selectedSides, setSelectedSides] = useState('');

  return (
    <form>
      <select
        onChange={(event) => setSelectedSides(event.target.value)}
        value={selectedSides}>
        <option value="salad">Salad</option>
        <option value="bread">Bread</option>
      </select>
    </form>
  )
}

export default DropdownSides;