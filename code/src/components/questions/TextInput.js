import React from 'react'

export const TextInput = ({ state, handleChange, data, setValid }) => {
  return (
    <>
      <h2>{data.title}</h2>
      {data.options.map(option => {
        const validate = e => {
          handleChange(e, 0, data.title, data.number, option.label)
          const siblingValid = () => {
            if (data.options.length > 1) {
              return data.options
                .filter(opt => option.id !== opt.id)
                .every(opt => state[opt.id] !== undefined && state[opt.id].length > 0)
            }
            return true
          }

          if (data.required && e.target.value && siblingValid()) {
            setValid(true)
          } else {
            setValid(false)
          }
        }

        return (
          <label key={option.id}>
            {option.label}
            <input
              required={data.required === 'true'}
              type='text'
              id={option.id}
              placeholder={option.placeholder}
              value={state[option.id]}
              onChange={e => validate(e)}
            />
          </label>
        )
      })}
    </>
  )
}
