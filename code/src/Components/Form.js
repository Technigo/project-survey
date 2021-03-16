import React from 'react'

import { TextInput } from './TextInput'
import { RadioButton } from './RadioButton'
import { DropDown } from './DropDown'


export const Form = () => {
  return (
  <form className="form" onSubmit={event => event.preventDefault()}>
  <TextInput />
  <RadioButton />
  <DropDown />
  </form>

  )

}