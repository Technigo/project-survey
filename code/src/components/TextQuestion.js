import React, { useState } from 'react';

export const TextQuestion = () => {
  const [name, setName] = useState("");
  return(
    <form>
      <h2>Please enter your name: {name}</h2>
      <input
        type="text"
        onChange={event => setName(event.target.value)}
        value={name}
      />
    </form>
  
  );
};