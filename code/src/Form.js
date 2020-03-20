import React, { useState } from 'react'
//import "./form.css"
import { Summary } from "./Summary"
import { TextInput } from "./TextInput"
import { SelectInput } from "./SelectInput"
import { NewsletterInput } from "./NewsletterInput"
import { RadioInput } from 'RadioInput'
import { SubmitButton } from 'SubmitButton'
import { Button } from 'Button'
import './form.css'

export const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [occupation, setOccupation] = useState('')
  const [location, setLocation] = useState('')
  const [education, setEducation] = useState('')
  const [wantsNewsletter, setWantsNewsletter] = useState(true)
  const [ageGroup, setAgeGroup] = useState()
  const [gender, setGender] = useState()

  const [section, setSection] = useState(1)


  const handleSubmit = event => {
    event.preventDefault();
    setSection(section + 1);
  }

  const handleClick = event => {
    event.preventDefault();
    setSection(section - 1);
  }

  const locations = [
    'Select location:',
    'Copenhagen',
    'Stockholm',
    'Oslo',
    'London'
  ]

  const educationAlt = [
    'Select education:',
    'Primary',
    'Secondary',
    'Higher Education'
  ]

  const ageGroups = [
    '18-29',
    '30-44',
    '45-65',
    '65+'
  ]

  const genderAlt = [
    'male',
    'female',
    'unspecified',
  ]




  return (
    <div className="Form">


      < form onSubmit={handleSubmit}>
        {section === 1 && (
          <>
            <TextInput text="First name: " input={firstName} setFunction={setFirstName} />
            <TextInput text="Last name: " input={lastName} setFunction={setLastName} />
            <TextInput text="Occupation: " input={occupation} setFunction={setOccupation} />
            <SubmitButton text="Next" />
          </>
        )}

        {section === 2 && (
          <>
            <SelectInput selections={locations} input={location} setFunction={setLocation} />
            <SelectInput selections={educationAlt} input={education} setFunction={setEducation} />
            <Button text="Back" handleClick={handleClick} />
            <SubmitButton text="Next" />
          </>
        )}

        {section === 3 && (
          <>
            <NewsletterInput wantsNewsletter={wantsNewsletter} setWantsNewsletter={setWantsNewsletter} />
            <Button text="Back" handleClick={handleClick} />
            <SubmitButton text="Next" />
          </>
        )}

        {section === 4 && (
          <>
            <RadioInput text="Age Group: " radioAlt={ageGroups} input={ageGroup} setFunction={setAgeGroup} />
            <RadioInput text="Gender: " radioAlt={genderAlt} input={gender} setFunction={setGender} />
            <Button text="Back" handleClick={handleClick} />
            <SubmitButton text="Submit" />

          </>
        )}


      </form >

      {section === 5 && (
        <div>
          <Summary firstName={firstName} lastName={lastName} occupation={occupation} location={location} education={education} wantsNewsletter={wantsNewsletter} ageGroup={ageGroup} gender={gender} />
          <Button text="Back" handleClick={handleClick} />
        </div>
      )}
      <div>Progress?</div>
    </div >
  )
}


