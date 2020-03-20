import React, { useState } from "react"
import { Radiobuttons } from './components/Radiobuttons'
import { Textinput } from './components/Textinput'
import { Dropdown } from './components/Dropdown'
import { Summary } from './components/Summary'
import { Progress } from './components/Progress'
import { Welcome } from './components/Welcome'

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
      <form action="" onSubmit={handleSubmit}>

        {section === 'welcome' && (
          <>
            < Welcome setProgress={setProgress} />
            <section className="button-container">
              <button type="button"
                onClick={event => {
                  setSection(event.target.value)
                }}
                value='firstQuestion'
              >Register
              </button>
            </section>
          </>
        )}

        {section === 'firstQuestion' && (
          <>
            <Textinput firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName} email={email} setEmail={setEmail} setProgress={setProgress} />
            <section className="button-container">
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
            </section>
          </>
        )}

        {section === 'secondQuestion' && (
          <>
            <Radiobuttons setProgress={setProgress} attendingOption={attendingOption} setAttendingOption={setAttendingOption} />
            <section className="button-container">
              <button type="button"
                onClick={event => setSection(event.target.value)}
                value='firstQuestion'
              >Back</button>
              <button type="button"
                onClick={event => setSection(event.target.value)}
                value='thirdQuestion'
              >Next</button>
            </section>
          </>
        )}

        {section === 'thirdQuestion' && (
          <>
            <Dropdown setProgress={setProgress} option={option} setOption={setOption} />
            <section className="button-container">
              <button type="button"
                onClick={event => setSection(event.target.value)}
                value='secondQuestion'
              >Back</button>
              <button type="button"
                onClick={event => setSection(event.target.value)}
                value='summary'
              >Submit</button>
            </section>
          </>
        )}

        {section === 'summary' && (
          <>
            <Summary firstName={firstName} lastName={lastName} email={email} attendingOption={attendingOption} option={option} setProgress={setProgress} />
            <section className="button-container">
              <a href="https://rautellin-survey.netlify.com/">Return</a>
            </section>
          </>
        )}
      </form>

      <Progress progress={progress} />

    </>
  )
}
