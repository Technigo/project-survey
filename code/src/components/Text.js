import React, { useState } from 'react'
import './text.css'

export const Text = () => {

  const [name, setName] = useState("");
  const [alias, setAlias] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="question-section" required>
      <label>
        <h1>Welcome! Whats your name? </h1>
        <input type="text"
          onChange={event => setName(event.target.value)}
          value={name}
        />
      </label>

      <label>
        <h1>Whats your alias? </h1>
        <input type="text"
          onChange={event => setAlias(event.target.value)}
          value={alias}
        />
      </label>
    </form>
  );
};


