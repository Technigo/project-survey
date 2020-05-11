import React, { useState } from 'react'
import { Summary } from "./Summary"
import { TextInput } from "./TextInput"
import { SelectInput } from "./SelectInput"
import { NewsletterInput } from "./NewsletterInput"
import { RadioInput } from 'components/RadioInput'
import { SubmitButton } from 'components/SubmitButton'
import { Button } from 'components/Button'
import { Progress } from './Progress'
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
    '▼ Preferred location',
    'Copenhagen',
    'Stockholm',
    'Oslo',
    'London'
  ]

  const educationAlt = [
    '▼ Level of education',
    'Primary',
    'Secondary',
    'Higher Education'
  ]

  const ageGroups = [
    '18–29',
    '30–44',
    '45–65',
    '65+'
  ]

  const genderAlt = [
    'Male',
    'Female',
    'Unspecified',
  ]


  return (
    <div className="form">

      <form onSubmit={handleSubmit}>
        {section === 1 && (
          <>
            <TextInput text="First name: " input={firstName} setFunction={setFirstName} />
            <TextInput text="Last name: " input={lastName} setFunction={setLastName} />
            <TextInput text="Occupation: " input={occupation} setFunction={setOccupation} />
            <div className="button-container">
              <div></div>
              <SubmitButton text="Next" />
            </div>
          </>
        )}

        {section === 2 && (
          <>
            <SelectInput selections={locations} input={location} setFunction={setLocation} />
            <SelectInput selections={educationAlt} input={education} setFunction={setEducation} />
            <div className="button-container">
              <Button text="Back" handleClick={handleClick} />
              <SubmitButton text="Next" />
            </div>
          </>
        )}

        {section === 3 && (
          <>
            <div className="radio-container">
              <RadioInput text="Age Group: " radioAlt={ageGroups} input={ageGroup} setFunction={setAgeGroup} />
              <RadioInput text="Gender: " radioAlt={genderAlt} input={gender} setFunction={setGender} />
            </div>
            <div className="button-container">
              <Button text="Back" handleClick={handleClick} />
              <SubmitButton text="Next" />
            </div>

          </>
        )}

        {section === 4 && (
          <>
            <div className="news-container">
              <NewsletterInput wantsNewsletter={wantsNewsletter} setWantsNewsletter={setWantsNewsletter} />
            </div>
            <div className="button-container">
              <Button text="Back" handleClick={handleClick} />
              <SubmitButton text="Submit" />
            </div>
          </>
        )}

      </form >

      {section === 5 && (
        <div>
          <Summary firstName={firstName} lastName={lastName} occupation={occupation} location={location} education={education} wantsNewsletter={wantsNewsletter} ageGroup={ageGroup} gender={gender} />
          <Button text="Back" handleClick={handleClick} />
        </div>
      )}
      <Progress progress={section} />
    </div >
  )
}


