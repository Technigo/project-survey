import React from 'react'

import { Name } from './Name'
import { Age } from './Age'
import { Select } from './SelectPlanet'
import { BringItem } from './BringItem'
import { SubmitButton } from './SubmitButton'




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
        <BringItem />
      </div>
      <div>
        <SubmitButton />
      </div>
    </form>
  )
}

