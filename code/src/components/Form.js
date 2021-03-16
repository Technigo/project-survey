import React from 'react'

import { Name } from './Name'
import { Select } from './Select'
import { RadioButton } from './Radiobuttons'
import { Age } from './Age'


export const Form = () => {
  return (
    <form>
      <div>
        <Name />
      </div>
      <div>
        <Age />
      </div>
      <div>
        <Select />
      </div>
      <div>
        <RadioButton />
      </div>
    </form>
  )
}

