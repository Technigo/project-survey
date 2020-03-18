import React, { useState } from 'react'

export const TypeForm = props => {
  const { person, setPerson } = props;

  return (
    <label>
      <select
        onChange={event => setPerson(event.target.value)}
        value={person}
      >
        <option value="">Select an option</option>
        <option value="a morning person">Morning Person</option>
        <option value="an evening person">Evening Person</option>
        <option value="neither morning or evening person">Neither</option>

      </select>
      <h3>I´m {person}</h3>
    </label>

  )
}