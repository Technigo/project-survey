import React, { useState } from 'react'

import { TextInput } from './TextInput.js'
import { SelectInput } from './SelectInput'
import { RadioButtonInput } from './RadioButtonInput'
import { RangeSliderInput } from './RangeSliderInput'
import { SubmitButton } from './SubmitButton'
import { Summary } from './Summary'

export const Form = () => {
  /* declaring the useState variables and functions that will later be passed on as props in to the different form components. */
  const [displaySummary, setDisplaySummary] = useState(false)
  const [name, setName] = useState('')
  const [spiritAnimal, setSpiritAnimal] = useState()
  const [personality, setPersonality] = useState('')
  const [age, setAge] = useState(50)

 /*function that prevents default loading of the page when the form is submitting & changes the setDisplaySummary to true.*/
  const onSubmit = event => {
    event.preventDefault()
    setDisplaySummary(true)
  }

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const handlePersonalityChange = event => {
    setPersonality(event.target.value)
  }

  const handleSpiritAnimalChange = event => {
    setSpiritAnimal(event.target.value)
  }

  const handleAgeChange = event => {
    setAge(event.target.value)
  }

  /* ternary statement below -if the displaySummary is false then the form will display. If the value is true then the summary will display.*/
  return (
    <>
      {! displaySummary ? (
      <form onSubmit={onSubmit}>

        <section className="input-container">
          <TextInput 
            name={name} 
            onNameChange={handleNameChange}
          />
        </section>

        <section className="input-container">
          <SelectInput 
            personality={personality} 
            onPersonalityChange={handlePersonalityChange}
          />
        </section>

        <section className="input-container">
          <RangeSliderInput
            age={age}
            onAgeChange={handleAgeChange}
          />
        </section>

        <section className="input-container">
          <RadioButtonInput 
            spiritAnimal={spiritAnimal}
            onSpiritAnimalChange={handleSpiritAnimalChange}
          />
        </section>

        <SubmitButton personality={personality}/>

      </form> ) : (
      <Summary 
        name={name}
        personality={personality} 
        spiritAnimal={spiritAnimal}
        age={age}
      />
      )}
    </>
  )
}



