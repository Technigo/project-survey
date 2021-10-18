import React from 'react'
import data from 'assets/data.json'
import { TextField } from 'components/questions/TextField'
import { Radio } from 'components/questions/Radio'
import { DropDown } from 'components/questions/DropDown'

console.log(data)

export const SurveyWrapper = () => {
  return (
    <div>
      {data.questions.map(item => {
        if (item.type === 'text') {
          return <TextField key={item.id} data={item} />
        } else if (item.type === 'radio') {
          return <Radio key={item.id} data={item} />
        } else if (item.type === 'dropdown') {
          return <DropDown key={item.id} data={item} />
        }
        return null
      })}
    </div>
  )
}
