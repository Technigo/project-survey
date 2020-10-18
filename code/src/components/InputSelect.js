import React, { useState } from 'react'

export const InputSelect = () => {
  const [season, setSeason] = useState('')

  return (
    <>
      <label>
        Favorite season?
        <select
          onChange={event => setSeason(event.target.value)}
          value={season}
          key={season.id}
        >
          <option value="">Favorite season?</option>
          <option value="Autum">Autum</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Winter">Winter</option>
        </select>
      </label>
    </>
  )
}