import React, { useState } from "react"
import 'index.css'
import { Radiobuttons } from './components/Radiobuttons'
import { Textinput } from './components/Textinput'
import { Dropdown } from './components/Dropdown'
import { Summary } from './components/Summary'
import { Progress } from './components/Progress'

export const App = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const [attendingOption, setAttendingOption] = useState('')

  const [option, setOption] = useState('')

  const [section, setSection] = useState('welcome')

  const [progress, setProgress] = useState(0)

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <>
      <h1>Register for this event</h1>
      <p>Please fill in the form and click the submitt button below to complete your registration for this event. You will recieve an confirmation upon successful registration. Not that starred files are requiered.</p>
      <form action="" onSubmit={handleSubmit}>

        {section === 'welcome' && (
          <>
            <h1>Hi and welcome!</h1>
            <p>To move forward press the button</p>
            <button type="button"
              onClick={event => {
                setSection(event.target.value)
              }}
              value='firstQuestion'
            >Next</button>
          </>
        )}

        {section === 'firstQuestion' && (
          <>
            <Textinput firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} setProgress={setProgress} />
            <button type="button"
              onClick={event => setSection(event.target.value)}
              value='welcome'
            >Back</button>
            <button type="button"
              onClick={event => {
                setSection(event.target.value)
              }}
              value='secondQuestion'
            >Next</button>
          </>
        )}

        {section === 'secondQuestion' && (
          <>
            <Radiobuttons setProgress={setProgress} attendingOption={attendingOption} setAttendingOption={setAttendingOption} />
            <button type="button"
              onClick={event => setSection(event.target.value)}
              value='firstQuestion'
            >Back</button>
            <button type="button"
              onClick={event => setSection(event.target.value)}
              value='thirdQuestion'
            >Next</button>
          </>
        )}

        {section === 'thirdQuestion' && (
          <>
            <Dropdown setProgress={setProgress} option={option} setOption={setOption} />
            <button type="button"
              onClick={event => setSection(event.target.value)}
              value='secondQuestion'
            >Back</button>
            <button type="button"
              onClick={event => setSection(event.target.value)}
              value='summary'
            >Submit</button>
          </>
        )}

        {section === 'summary' && (
          <>
            <Summary firstName={firstName} lastName={lastName} email={email} attendingOption={attendingOption} option={option} setProgress={setProgress} />
            <button type="button"
              onClick={event => setSection(event.target.value)}
              value='welcome'
            >Return</button>
          </>
        )}
      </form>

      <Progress progress={progress} />

    </>
  )
}
