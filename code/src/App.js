import React, { useState } from 'react'
import { TypeForm } from 'components/TypeForm'
import { NameInput } from 'components/NameInput'
import { PetForm } from 'components/Pet'

export const App = () => {
  return (

    <div>
      <h1>What´s your name?</h1>
      <NameInput />
      <h1>What type of person are you?</h1>
      <TypeForm />
      <h1>Which is your favorite pet?</h1>
      <PetForm />

    </div>
  )


}
