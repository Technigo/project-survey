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
  const [name, setName] = useState("")
  const [vacation, setVacation] = useState("")
  const [spiritAnimal, setSpiritAnimal] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  }

  return (
    <section className="formContainer">
      {!showSummary ? (
        <form onSubmit={handleSubmit}>
          <h1>Pick your online alias!</h1>
          <TextInput name={name} setName={setName} />
          <RadioButtons spiritAnimal={spiritAnimal} setSpiritAnimal={setSpiritAnimal} />
          <Select vacation={vacation} setVacation={setVacation} />
          <Checkbox />
          <Button type="submit" title="submit" />
        </form>) : (
          <Summary name={name} vacation={vacation} spiritAnimal={spiritAnimal} />)}
    </section>
  )
}
