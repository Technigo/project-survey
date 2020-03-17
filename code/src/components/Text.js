import React, { useState } from 'react'
import './text.css'
import { Response } from './Response'

export const Text = () => {

  const [name, setName] = useState("");
  const [alias, setAlias] = useState("");
  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  }
  const [showSummary, setShowSummary] = useState(false);

  return (
    <div>
    <form onSubmit={handleSubmit} className="question-section" required>
      <label>
        <h1>Welcome! Whats your name? </h1>
        <input type="text"
          onChange={event => setName(event.target.value)}
          required 
          value={name}
        />
      </label>

      <label>
        <h1>Whats your alias? </h1>
        <input type="text"
          onChange={event => setAlias(event.target.value)}
          required
          value={alias}
        />
      </label>
        <button type="submit">submit</button>
      </form>

      {showSummary && (
    <Response name={name}/>)}
    </div>
  );
};


