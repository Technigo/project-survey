import React from 'react'
import { useState } from "react"
import { Summary } from 'Components/Summary'
import { Name } from 'Components/Form'
import { Level } from 'Components/Form'
import { Destination } from 'Components/Form'
import { Button } from 'Components/Form'
import { Description } from './Components/Description'
import './app.css'

export const App = () => {
  const [name, setName] = useState('')
  const [codingLevel, setCodingLevel] = useState();
  const [destination, setDestination] = useState('');
  const [formValue, setFormValue] = useState('');
  const [showSummary, setShowSummary] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowSummary(true)
  }

  //preventDefault prevents the page from re-rendering on submit
  return (
    <main className="form-container">
      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          <Description />
          <Name name={name} setName={setName} />
          <Level codingLevel={codingLevel} setCodingLevel={setCodingLevel} />
          <Destination destination={destination} setDestination={setDestination} />
          <Button formValue={formValue} setFormValue={setFormValue} />
        </form>) : (
          <Summary name={name} codingLevel={codingLevel} destination={destination} />
        )}
    </main>
  )
}
