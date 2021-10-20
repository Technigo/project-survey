import React from 'react'

export const DropDown = props => {
  const { title, options, id, type } = props.data
  const { state, handleChange } = props

  // generate object with next question
  const nextQuestion = options.reduce(
    (o, option) => ({ ...o, [option.value]: option.next_question }),
    {}
  )
  console.log(nextQuestion)

  return (
    <>
      <h2>{title}</h2>
      <select
        name='select'
        id={type + id}
        value={state[type + id]}
        onChange={e => handleChange(e, nextQuestion[e.target.value])}>
        {options.map(option => {
          return (
            <option hidden={option.hidden} key={option.label + id} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </>
  )
}
