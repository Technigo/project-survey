import React from 'react'
import 'components/questions/textInput.css'
import { Button } from 'components/Button'
import { QuestionHeading } from 'components/QuestionHeading'

export const TextInput = ({ state, handleChange, data, step, incrementStep, decrementStep }) => {
  const siblingValid = option => {
    if (data.options.length > 1) {
      return data.options
        .filter(opt => option.id !== opt.id)
        .every(opt => state[opt.id] !== undefined && state[opt.id].length > 0)
    }
    return true
  }

  const checkValid = (e, option) => {
    if (data.required && e.target.value && siblingValid(option)) {
      return true
    } else {
      return false
    }
  }

  const onChangeHandler = (e, option) => {
    let validated = checkValid(e, option)
    handleChange(e, 0, data.title, data.number, option.label, data.id, validated)
  }
  return (
    <>
      <QuestionHeading number={data.number} title={data.title} />
      {data.options.map(option => {
        return (
          <label className='label-text-input label' key={option.id}>
            {option.label}
            <span className='required'>{data.required ? ' *required' : ''}</span>
            <input
              className='text-input'
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
      <div className='button-container'>
        <Button disabled={step === 1} text={''} type={'up'} onClick={decrementStep} />
        <Button
          disabled={step === 'end' || !state[data.id]}
          text={''}
          type={'down'}
          onClick={incrementStep}
        />
      </div>
    </>
  )
}
