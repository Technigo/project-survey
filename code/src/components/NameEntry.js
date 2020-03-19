import React from 'react';
import './nameEntry.css'

export const NameEntry = ({name, setName}) => {
  return (
    <section className="name-entry">
    <label className="label">Hey Hoarder! What is your name?
      <input className="input"
        type="text"
        value={name} required
        onChange={event => setName(event.target.value)}
      />
    </label>
    </section>
  )
}