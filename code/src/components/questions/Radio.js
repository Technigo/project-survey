import React from 'react'
import 'components/questions/radio.css'
import { Button } from 'components/Button'
import { Heading } from 'components/Heading'

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
      <Heading number={data.number} title={data.title} />

      {data.options.map(option => {
        return (
          <label className='label-radio' key={option.id}>
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
      <span className='required'>{data.required ? ' *required' : ''}</span>
      <div className='button-container'>
        <Button disabled={step === 1} text={''} type={'up'} onClick={decrementStep} />
        <Button
          disabled={step === 'end' || (!state[data.id] && data.required)}
          text={''}
          type={'down'}
          onClick={incrementStep}
        />
      </div>
    </>
  )
}
