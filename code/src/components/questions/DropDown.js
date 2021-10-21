import React from 'react'
import 'components/questions/dropDown.css'
import { Button } from 'components/Button'
import { Heading } from 'components/Heading'

export const DropDown = ({ state, handleChange, data, step, incrementStep, decrementStep }) => {
  // generate object with next question
  const nextQuestion = data.options.reduce(
    (o, option) => ({ ...o, [option.value]: option.next_question }),
    {}
  )

  const checkValid = e => {
    if (data.required && e.target.value) {
      return true
    } else {
      return false
    }
  }
  const onChangeHandler = e => {
    let validated = checkValid(e)
    handleChange(
      e,
      nextQuestion[e.target.value],
      data.title,
      data.number,
      'Answer',
      data.id,
      validated
    )
  }

  return (
    <>
      <Heading number={data.number} title={data.title} />
      <label className='label-dropdown label' key={data.id}>
        {data.label}
        <span className='required'>{data.required ? ' *required' : ''}</span>
        <select
          className='dropdown'
          name='select'
          id={data.type + data.id}
          value={state[data.type + data.id]}
          onChange={e => onChangeHandler(e)}>
          {data.options.map(option => {
            return (
              <option hidden={option.hidden} key={option.label + data.id} value={option.value}>
                {option.label}
              </option>
            )
          })}
        </select>
      </label>
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
