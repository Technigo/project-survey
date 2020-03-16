import React, { useState } from 'react'
import './app.css'
import { TextInput } from "./TextInput"
import { Summary } from "./Summary"
import { Select } from "./Select"
import { RadioButtons } from "./RadioButtons"
import { Checkbox } from "./Checkbox"
import { Button } from "./Button"

export const App = () => {
  const [showSummary, setShowSummary] = useState(false)

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  }

  return (
    <section className="formContainer">
      <h1>Pick your online alias!</h1>
      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          <TextInput />
          <RadioButtons />
          <Select />
          <Checkbox />
          <Button type="submit" title="submit" />
        </form>) : (
          <Summary />)}
    </section>
  )
}
