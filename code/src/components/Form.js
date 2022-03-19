import React, { useState } from 'react'

import WelcomePage from 'components/WelcomePage'
import RadioButton from 'components/RadioButton'
import CheckBox from 'components/CheckBox';
import DropDown from 'components/DropDown';
import Summary from 'components/Summary';

export const Form = () => {
// STATES // 
  const [ageGroup, setAgeGroup] = useState('')
  const [personality, setPersonality] = useState(false)
  const [person, setPerson] = useState(false)
  const [actor, setActor] = useState('')
  const [name, setName] = useState('')
  const [counter, setCounter] = useState(0)

// DECLARED FUNCTIONS //
  const handleNameChange = (event) => {
        setName(event.target.value) 
      }

  const handleRadioChange = (event) => { 
        setAgeGroup(event.target.value) 
      }

  const handlePersonality = (event) => {
        setPersonality(event.target.checked)
      }
  
  const handlePerson = (event) => {
        setPerson(event.target.checked)
      }

  const handleDropDown = (event) => {
        setActor(event.target.value) 
      }

  const handleNextQuestion = () => {
        setCounter(counter + 1)
      }
  
  const reloadSurvey = () => window.location.reload() 

  return (
    <form className='form-wrapper'>
      {counter === 0 &&
        <WelcomePage
          nextQuestion={handleNextQuestion}
          onNameChange={handleNameChange}
          username={name}
      />}
      {counter === 1 &&
        <DropDown
          nextQuestion={handleNextQuestion}
          onDropDownChange={handleDropDown}
          actor={actor}
      /> }
      {counter === 2 &&
        <CheckBox 
          nextQuestion={handleNextQuestion}
          setPersonality={handlePersonality}
          personality={personality}
          setPerson={handlePerson}
          person={person}
      />}
      {counter === 3 &&
        <RadioButton
        nextQuestion={handleNextQuestion}
        onRadioChange={handleRadioChange}
        age={ageGroup}       
      />}
      {counter === 4 && (
          <Summary
          age={ageGroup}
          personality={personality}
          actor={actor}
          username={name}
          person={person}
          reloadSurvey={reloadSurvey}
        />
      )}
    </form>
  )
}
