import React from 'react'
import { TextInput } from 'TextInput.js'
import { ListInput } from 'ListInput.js'
import { CheckboxInput } from 'CheckboxInput'
import { RadioButtons } from 'RadioButtons'
import 'App.css'

export const App = () => {
  return (
    <div className="FirstForm">
      <form onSubmit={event => event.preventDefault()}>
        <TextInput />
        <h2>is</h2>
        <ListInput />
        <RadioButtons />
        <CheckboxInput />
      </form>
    </div>
  )
}
