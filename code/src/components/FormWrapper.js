import React from 'react'
import data from 'assets/data.json'
import { TextInput } from 'components/questions/TextInput'
import { Radio } from 'components/questions/Radio'
import { DropDown } from 'components/questions/DropDown'

console.log(data)

export const FormWrapper = () => {
  return (
    <form>
      {data.questions.map(item => {
        if (item.type === 'text') {
          return <TextInput key={item.id} data={item} />
        } else if (item.type === 'radio') {
          return <Radio key={item.id} data={item} />
        } else if (item.type === 'dropdown') {
          return <DropDown key={item.id} data={item} />
        }
        return null
      })}
    </form>
  )
}
