import React from 'react'

export const DropDown = ({ state, handleChange, data }) => {
  // generate object with next question
  const nextQuestion = data.options.reduce(
    (o, option) => ({ ...o, [option.value]: option.next_question }),
    {}
  )
  console.log(nextQuestion)

  return (
    <>
      <h2>{data.title}</h2>
      <select
        name='select'
        id={data.type + data.id}
        value={state[data.type + data.id]}
        onChange={e =>
          handleChange(e, nextQuestion[e.target.value], data.title, data.number, 'Answer', data.id)
        }>
        {data.options.map(option => {
          return (
            <option hidden={option.hidden} key={option.label + data.id} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </select>
    </>
  )
}
