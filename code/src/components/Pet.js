import React, { useState } from 'react'

export const PetForm = () => {
  const [pet, setPet] = useState('');

  return (
    <form>
      <label>
        Dog
        <input type="checkbox"
          checked={pet}
          onChange={event => setPet(event.target.checked)}
        >/</input>
      </label>
    </form>
  )
}