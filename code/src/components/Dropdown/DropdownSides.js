import React from 'react';

const DropdownSides = ({ selectedSides, setSelectedSides }) => {
  console.log(selectedSides)

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