import React, { useState } from 'react';
import '../index.css';

export const Name = () => {
  const [name, setName] = useState('')

  return (
    <form>
      <p className="questionTitle">Name:</p>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name} />
    </form>
  );
};