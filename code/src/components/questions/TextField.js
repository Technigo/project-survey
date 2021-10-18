import React from 'react'

export const TextField = props => {
  const { title, fields } = props.data
  return (
    <div>
      <h2>{title}</h2>
      {fields.map(field => {
        return (
          <label key={Math.random() * 10 + field.id}>
            {field.label}
            <input type='text' id={field.id} placeholder={field.placeholder} />
          </label>
        )
      })}
    </div>
  )
}
