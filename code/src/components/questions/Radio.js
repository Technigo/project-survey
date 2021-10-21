import React from 'react'
import { Button } from 'components/Button'

export const Radio = ({
  state,
  handleChange,
  data,
  setValid,
  step,
  incrementStep,
  decrementStep,
}) => {
  const validate = (e, option) => {
    console.log('validate radio', e.target.value)
    if (data.required && e.target.value) {
      setValid(true)
    } else {
      setValid(false)
    }
  }

  const checkValid = (e, option) => {
    if (data.required && e.target.value) {
      return true
    } else {
      return false
    }
  }

  const onChangeHandler = (e, option) => {
    let validated = checkValid(e, option)
    console.log('validator', validated)
    handleChange(e, option.next_question, data.title, data.number, 'Answer', data.id, validated)
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
      <Button disabled={step === 1} text={'^'} onClick={decrementStep} />
      <Button disabled={step === 'end' || !state[data.id]} text={'v'} onClick={incrementStep} />
    </>
  )
}
