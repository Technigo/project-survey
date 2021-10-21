import React from 'react'

export const Radio = ({ state, handleChange, data, setValid }) => {
  const validate = (e, option) => {
    console.log('validate radio', e.target.value)
    if (data.required && e.target.value) {
      setValid(true)
    } else {
      setValid(false)
    }
  }
  const onChangeHandler = (e, option) => {
    handleChange(e, option.next_question, data.title, data.number, 'Answer', data.id)
    validate(e, option)
  }

  return (
    <>
      <h2>{data.title}</h2>
      {data.options.map(option => {
        // data.required ? validate(option) : setValid(true)
        return (
          <label key={option.id}>
            {option.label}
            <input
              type='radio'
              checked={state[data.type + data.id] === option.value}
              name={data.type + data.id}
              id={data.type + data.id}
              value={option.value}
              onChange={e => onChangeHandler(e, option)}
            />
          </label>
        )
      })}
    </>
  )
}
