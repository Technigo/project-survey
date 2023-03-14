import React, { useState } from 'react';
import '../index.css';

export const Select = () => {
  const [location, setLocation] = useState('')

  return (
    <form>
      <select
        onChange={(event) => setLocation(event.target.value)}
        value={location}>
        <option value="">Selection location:</option>
        <option value="Stockholm">Stockholm</option>
        <option value="Barcelona">Barcelona</option>
        <option value="Helsinki">Helsinki</option>
        <option value="Oslo">Oslo</option>
      </select>
    </form>
  );
};