import React, { useState } from 'react'
//import "./form.css"
import { Summary } from "./Summary"
import { TextInput } from "./TextInput"
import { SelectInput } from "./SelectInput"
import { CheckboxInput } from "./CheckboxInput"
import { RadioInput } from 'RadioInput'
import { Button } from 'Button'
import './form.css'

export const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [occupation, setOccupation] = useState('')
  const [location, setLocation] = useState('')
  const [wantsNewsletter, setWantsNewsletter] = useState(true)
  const [ageGroup, setAgeGroup] = useState()
  const [showSummary, setShowSummary] = useState(false)

  const handleSubmit = event => {
    event.preventDefault();
    setShowSummary(true);
  }

  const ageGroups = [
    '18-29',
    '30-44',
    '45-65',
    '65+'
  ]



  return (
    <div className="Form">

      {showSummary ? (
        <Summary name={firstName} lastName={lastName} location={location} wantsNewsletter={wantsNewsletter} ageGroup={ageGroup} />
      ) : (
          < form onSubmit={handleSubmit}>
            <TextInput text="First name: " input={firstName} setFunction={setFirstName} />
            <TextInput text="Last name: " input={lastName} setFunction={setLastName} />
            <TextInput text="Occupation: " input={occupation} setFunction={setOccupation} />
            <SelectInput location={location} setLocation={setLocation} />
            <CheckboxInput wantsNewsletter={wantsNewsletter} setWantsNewsletter={setWantsNewsletter} />
            <RadioInput text="Age Group: " radioAlt={ageGroups} input={ageGroup} setFunction={setAgeGroup} />
            <Button />
          </form >
        )
      }
    </div >
  )
}


