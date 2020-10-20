import React from 'react'

export const NameQuestion = ({name, setName}) => {
    return (
        <label>
          What's your name?
        <input className = "input-name"
            type="text"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />
        </label>
    )
}
