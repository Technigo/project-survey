import React, { useState } from "react"
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
  const [section, setSection] = useState('intro')

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>

        {section === 'intro' && (
          <>
            < intro />
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
      </form>

    </>
  )
}


