import React, { useState } from 'react';


export const Input = () => {
  const [name1, setName1] = useState('')
  const [name2, setName2] = useState('')
  return (
    <form onSubmit={event => event.preventDefault()}>
      <label>
        Firstname:
        <input
          type="text"
          onChange={event => setName1(event.target.value)}
          value={name1}
        />
      </label>
      <label>
        Surname:
        <input
          type="text"
          onChange={event => setName2(event.target.value)}
          value={name2}
        />
      </label>
    </form >
  );
};