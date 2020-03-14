import React from 'react'
import { Radiobuttons } from './components/Radiobuttons'
import { Checkboxes } from './components/Checkboxes'
import { Input } from './components/Input'
import { Dropdown } from './components/Dropdown'





export const App = () => {
  return (
    <div>
      <Input />
      <Checkboxes />
      <Radiobuttons />
      <Dropdown />

    </div>
  )
}
