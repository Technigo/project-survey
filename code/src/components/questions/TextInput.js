import React from 'react'

export const TextInput = props => {
  const { title, fields } = props.data
  const { state, handleChange } = props

  return (
    <>
      <h2>{title}</h2>
      {fields.map(field => {
        // const { id, label, placeholder } =
        return (
          <label key={field.id}>
            {field.label}
            <input
              type='text'
              id={field.id}
              placeholder={field.placeholder}
              value={state[field.id]}
              onChange={e => handleChange(e, 0, title, props.data.id)}
            />
          </label>
        )
      })}
    </>
  )
}
