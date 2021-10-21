import React from 'react'
import { Button } from 'components/Button'

export const TextInput = ({
  state,
  handleChange,
  data,
  setValid,
  step,
  incrementStep,
  decrementStep,
}) => {
  const siblingValid = option => {
    console.log('validate sibling')
    if (data.options.length > 1) {
      return data.options
        .filter(opt => option.id !== opt.id)
        .every(opt => state[opt.id] !== undefined && state[opt.id].length > 0)
    }
    return true
  }

  const validate = (e, option) => {
    // console.log('validate', state[option.id])
    if (data.required && e.target.value && siblingValid(option)) {
      setValid(true)
    } else {
      setValid(false)
    }
  }

  const checkValid = (e, option) => {
    if (data.required && e.target.value && siblingValid(option)) {
      return true
    } else {
      return false
    }
  }

  const onChangeHandler = (e, option) => {
    console.log('onchangehandler')
    let validated = checkValid(e, option)
    console.log('validator', validated)
    handleChange(e, 0, data.title, data.number, option.label, data.id, validated)
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
              required={data.required === 'true'}
              type='text'
              id={option.id}
              placeholder={option.placeholder}
              value={state[option.id]}
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
