import React from 'react'
import 'components/questions/textInput.css'
import { Button } from 'components/Button'
import { Heading } from 'components/Heading'

export const TextInput = ({ state, handleChange, data, step, incrementStep, decrementStep }) => {
  console.log('[data is required]:', !data.required)
  console.log('[step end]:', step === 'end')
  console.log('[!state[data.id]]:', state[data.id] ? true : false)

  const siblingValid = option => {
    if (data.options.length > 1) {
      return data.options
        .filter(opt => option.id !== opt.id)
        .every(opt => state[opt.id] !== undefined && state[opt.id].length > 0)
    }
    return true
  }

  const checkValid = (e, option) => {
    console.log('[sibling is valid]:', siblingValid(option))
    if (e.target.value && siblingValid(option)) {
      return true
    } else {
      return false
    }
  }

  const onChangeHandler = (e, option) => {
    let validated = data.required ? checkValid(e, option) : true
    console.log('[is validated]:', validated)
    handleChange(e, 0, data.title, data.number, option.label, data.id, validated)
  }
  return (
    <>
      <Heading number={data.number} title={data.title} />
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
        <Button disabled={step === 0} text={''} type={'up'} onClick={decrementStep} />
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
