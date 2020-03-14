import React from 'react'
import { Radiobuttons } from './components/Radiobuttons'
import { Textinput } from './components/Textinput'
import { Dropdown } from './components/Dropdown'

export const App = () => {
  return (
    <>
      <h1>Register for this event</h1>
      <p>Please fill in the form and click the submitt button below to complete your registration for this event. You will recieve an confirmation upon successful registration. Not that starred files are requiered.</p>
      <Radiobuttons />
      <Textinput />
      <Dropdown />
    </>
  )
}
