import React, { useState } from "react"
import { Radiobuttons } from './components/Radiobuttons'
import { Textinput } from './components/Textinput'
import { Dropdown } from './components/Dropdown'

export const App = () => {

  const [section, setSection] = useState('firstQuestion')

  return (
    <>
      <h1>Register for this event</h1>
      <p>Please fill in the form and click the submitt button below to complete your registration for this event. You will recieve an confirmation upon successful registration. Not that starred files are requiered.</p>
      <form action="" onSubmit={(event) => event.preventDefault()}>

        {section === 'firstQuestion' && (
          <>
            <Radiobuttons />
            <button type="button"
              onClick={event => setSection(event.target.value)}
              value='secondQuestion'
            >Submit</button>
          </>
        )}

        {section === 'secondQuestion' && (
          <>
            <Textinput />
            <button type="button"
              onClick={event => setSection(event.target.value)}
              value='thirdQuestion'
            >Submit</button>
          </>
        )}

        {section === 'thirdQuestion' && (
          <>
            <Dropdown />
            <button type="button"
              onClick={console.log('happy')}
            >Submit</button>
          </>
        )}

      </form>
    </>
  )
}
