import React from 'react'
import { Description } from './Components/Description'
import { Name } from './Components/Form'
import { Level } from 'Components/Form'
import { Destination } from 'Components/Form'
import { Button } from 'Components/Form'
import './app.css'

export const App = () => {
  return (
    <main className="form-container">
      <Description />
      <Name />
      <Level />
      <Destination />
      <Button />
    </main>
  )
}
