import React, { useState } from 'react'
import './text.css'

export const Text = () => {

  const [name, setName] = useState("");

  return (
    <form onSubmit={event => event.preventDefault()} className="question-section" required>
      <label>
        <h1>Welcome! Whats your name? </h1>
        <input type="text"
          onChange={event => setName(event.target.value)}
          value={name}
        />
      </label>
    </form>
  );
};


