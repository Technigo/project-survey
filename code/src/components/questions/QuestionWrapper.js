import React from 'react'
import 'components/formWrapper.css'
import data from 'assets/data.json'
import { TextInput } from 'components/questions/TextInput'
import { Radio } from 'components/questions/Radio'
import { DropDown } from 'components/questions/DropDown'
import { Range } from 'components/questions/Range'

console.log(data)

export const QuestionWrapper = ({ step, state, handleChange, incrementStep, decrementStep }) => {
  const Questions = () => {
    return data.questions
      .filter(item => item.number === step)
      .map(item => {
        if (item.type === 'text') {
          return (
            <TextInput
              key={item.id}
              data={item}
              state={state}
              handleChange={handleChange}
              step={step}
              incrementStep={incrementStep}
              decrementStep={decrementStep}
            />
          )
        } else if (item.type === 'radio') {
          return (
            <Radio
              key={item.id}
              data={item}
              state={state}
              handleChange={handleChange}
              step={step}
              incrementStep={incrementStep}
              decrementStep={decrementStep}
            />
          )
        } else if (item.type === 'dropdown') {
          return (
            <DropDown
              key={item.id}
              data={item}
              state={state}
              handleChange={handleChange}
              step={step}
              incrementStep={incrementStep}
              decrementStep={decrementStep}
            />
          )
        } else if (item.type === 'range') {
          return (
            <Range
              key={item.id}
              data={item}
              state={state}
              handleChange={handleChange}
              step={step}
              incrementStep={incrementStep}
              decrementStep={decrementStep}
            />
          )
        }
        return null
      })
  }
  return <Questions />
}
