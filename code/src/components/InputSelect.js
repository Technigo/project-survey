import React, { useState } from 'react'

export const InputSelect = (props) => {
  //const [season, setSeason] = useState('')
  //Move this to question component later.
  const { id, question, setSeason, value } = props

  return (
    <>
      <label htmlFor={id}>
        <h2>{question}</h2>
        <select
          onChange={(event) => setSeason(event.target.value)}
          //id={id}
          id={id}
          //value={season}
          value={value}
          //key={season.id}
          key={value.id}
        >
          <option value="Season">Favorite season?</option>
          <option value="Autum">Autum</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Winter">Winter</option>
        </select>
      </label>
    </>
  )
}