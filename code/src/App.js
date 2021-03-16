import React, { useState } from 'react'

import Welcome from './components/Welcome'
import Email from './components/Email'
import WorkArea from './components/WorkArea'
import Place from './components/Place'
import Summary from './components/Summary'

/* (event) => event.preventDefault() */

export const App = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    setdisplaySummary(true)
  }

  const [displaySummary, setdisplaySummary] = useState(false)
  const [email, setEmail] = useState('')
  const [workArea, setWorkArea] = useState()
  const [place, setPlace] = useState(false)
  

  return (

    
    <div className='main'>
      <Welcome />

      {!displaySummary ? (
        <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <section className='email' id='email'>
            <Email
            email={email}
            setEmail={setEmail}
            />
          </section>


          <section className='workArea' id='workArea'>
            <WorkArea
            workArea={workArea}
            setWorkArea={setWorkArea}
            />
          </section>


          <section className='place' id='place'>
            <Place
            place={place}
            setPlace={setPlace}
            />
          </section>
          
          </form>
        </div>
      ) : (
      <section className='summary'>
        <Summary
        email={email}
        workArea={workArea}
        place={place}
        />
      </section>
      )}
    </div>
  )
}
