import React from 'react'
import data from 'assets/data.json'
import { TextField } from 'components/questions/TextField'
import { Radio } from 'components/questions/Radio'
import { DropDown } from 'components/questions/DropDown'

console.log(data)

export const SurveyWrapper = () => {
  return (
    <div>
      <TextField />
      <Radio />
      <DropDown />
    </div>
  )
}
