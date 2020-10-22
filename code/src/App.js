import React, { useState } from 'react'
import { Radiobuttons } from './Components/Radiobuttons'
import { Textinput } from './Components/Textinput'
import { Dropdown } from './Components/Dropdown'
import { Summary } from './Components/Summary'
import { Intro } from './Components/Intro'

export const App = () => {

  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [interest, setInterest] = useState('')
  const [option, setOption] = useState('')
  const [section, setSection] = useState('Intro')

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <> 
      <form action="" onSubmit={handleSubmit}>

        {section === 'Intro' && (
          <>
            < Intro />
            <section className="button-container">
              <button type="button"
                onClick={event => {
                  setSection(event.target.value)
                }}
                value='firstQuestion'
              >LETS GO!!
              </button>
            </section>
          </>
        )}

        {section === 'firstQuestion' && (
          <>
            <Textinput name={name} setName={setName} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} email={email} setEmail={setEmail} />
            <section className="button-container">
              <button type="button"
                onClick={event => setSection(event.target.value)}
                value='Intro'
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
            <Radiobuttons interest={interest} setInterest={setInterest} />
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
            <Dropdown option={option} setOption={setOption} />
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
            <Summary name={name} phoneNumber={phoneNumber} email={email} interest={interest} option={option} />
            <section className="button-container">
              <a href="xxxx">RETURN</a>
            </section>
          </>
        )}
      </form>
    </>
  )
}


