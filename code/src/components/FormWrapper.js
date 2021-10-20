import React from 'react'
import data from 'assets/data.json'
import { TextInput } from 'components/questions/TextInput'
import { Radio } from 'components/questions/Radio'
import { DropDown } from 'components/questions/DropDown'
import { FormSummary } from 'components/FormSummary'

console.log(data)

export const FormWrapper = props => {
  const { step, state, handleChange } = props

  return (
    <form>
      {data.questions
        .filter(item => item.number === step)
        .map(item => {
          if (item.type === 'text') {
            return <TextInput key={item.id} data={item} state={state} handleChange={handleChange} />
          } else if (item.type === 'radio') {
            return <Radio key={item.id} data={item} state={state} handleChange={handleChange} />
          } else if (item.type === 'dropdown') {
            return <DropDown key={item.id} data={item} state={state} handleChange={handleChange} />
          }
          return null
        })}

      {step === 'end' && <FormSummary state={state} />}
    </form>
  )
}
