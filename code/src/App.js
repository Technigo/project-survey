import React from 'react'
import Header from './components/Header/Header'
import DropDown from './components/DropDown/DropDown'
import RadioButtons from './components/RadioButtons/RadioButtons'
import SubmitButton from './components/SubmitButton/SubmitButton'
import NameForm from './components/NameForm/NameForm'

export const App = () => {
  return (
    <div>
    <Header />
      Survey
    <NameForm />
    <DropDown />
    <RadioButtons />
    <SubmitButton />
    </div>
  )
}
