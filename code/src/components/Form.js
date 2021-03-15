import React from 'react'

import { Name } from './Name'
import { Select } from './Select'
import { RadioButton } from './Radiobuttons'


export const Form = () => {
  return (
    <form>
      <div>
        <Name />
      </div>
      <div>
        <RadioButton radiobutton= 'här ska det vara en radiobutton fråga.' />
      </div>
      <div>
        <Select />
      </div>
    </form>
  )
}

