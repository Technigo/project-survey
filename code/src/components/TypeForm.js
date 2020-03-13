import React, { useState } from 'react'

export const TypeForm = () => {
  const [person, setPerson] = useState("");

  return (
    <form>
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
    </form>

  )
}