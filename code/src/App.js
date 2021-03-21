import React, { useState } from 'react'

import Welcome from './components/Welcome'
import Email from './components/Email'
import WorkArea from './components/WorkArea'
import Place from './components/Place'
import Summary from './components/Summary'

export const App = () => {

  const [displaySummary, setDisplaySummary] = useState(false)
  const [email, setEmail] = useState('')
  const [workArea, setWorkArea] = useState()
  const [place, setPlace] = useState(false)

  const validateForm = () => {
    if (
      email === '' ||
      !workArea ||
      !place
    ) {
      alert(`Please answer all questions to be able to submit.`)
      return false
    } else {
      return true
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault() 
    setDisplaySummary(validateForm())
  }

  return (

    <div className = 'container'>

    {!displaySummary && (
      <div className='main'>

        <Welcome />

        <div className='formContainer'>
          <form onSubmit={handleSubmit}>

            <Email
            email={email}
            setEmail={setEmail}
            />

            <WorkArea
            workArea={workArea}
            setWorkArea={setWorkArea}
            />

            <Place 
            place={place}
            setPlace={setPlace}
            />

        </form>
        </div>
      </div>
      )} 

    {displaySummary && (

      <Summary
      email={email}
      workArea={workArea}
      place={place}
      />
      )}
     
    </div>
  )
}