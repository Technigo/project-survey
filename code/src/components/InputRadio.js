import React from 'react'

export const InputRadio = (props) => {
  const { state, setState } = props

  const genders = ['Woman', 'Man', 'Non binary']

  return (
    genders.map(gender => (
      <label key={gender}>
        <input
          type="radio"
          value={gender}
          onChange={event => setState(event.target.value)}
          checked={state === gender}
        />
        {gender}
      </label>
    ))
  )
}