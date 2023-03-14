import React from 'react';

export const SuperPower = ({ power, setPower }) => {
  const handleSuperPower = (e) => {
    setPower(e.target.value)
  }

  return (
    <label htmlFor="superPower">
        Which superpower would you choose?
      <select
        id="superPower"
        onChange={handleSuperPower}
        value={power}
        required>
        <option value="">Select superpower</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="Steel">Steel</option>
        <option value="Time">Timetravel</option>
      </select>
    </label>
  )
}
