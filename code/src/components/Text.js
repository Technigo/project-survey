import React, { useState } from 'react'
import './text.css'

export const Text = () => {

  const [name, setName] = useState("");
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
    </form>
  );
};


