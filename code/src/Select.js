import React, { useState } from 'react'
import "./select.css"

export const Select = () => {
  const [vacation, setVacation] = useState("");

  return (
    <select
      onChange={event => setVacation(event.target.value)}
      value={vacation}
      required
    >
      <option value="">Select your dream vacation:</option>
      <option value="newyork">visiting to New York City</option>
      <option value="sunbathing">sun bathing on a tropical island</option>
      <option value="cottage">relaxing in a cottage</option>
      <option value="sailing">sailing around the world</option>
    </select>
  )
}