import React from 'react'
import 'components/questions/radio.css'
import { Button } from 'components/Button'

export const Radio = ({ state, handleChange, data, step, incrementStep, decrementStep }) => {
  const checkValid = e => {
    if (data.required && e.target.value) {
      return true
    } else {
      return false
    }
  }

  const onChangeHandler = (e, option) => {
    let validated = checkValid(e)
    handleChange(e, option.next_question, data.title, data.number, 'Answer', data.id, validated)
  }

  return (
    <>
      <h2>{data.title}</h2>
      {data.options.map(option => {
        return (
          <label className='label' key={option.id}>
            {option.label}
            <input
              className='radio'
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
