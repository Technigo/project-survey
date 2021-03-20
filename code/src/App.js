import React, { useState } from 'react'

import Welcome from './components/Welcome'
import Email from './components/Email'
import WorkArea from './components/WorkArea'
import Place from './components/Place'
import Summary from './components/Summary'


export const App = () => {


/*   const validateForm = () => {
    if (email === '' || place === '' || workArea.checked === false){
      setdisplaySummary(false)
    } else {
      setdisplaySummary(true)
  }
} */
  //function for submit button
  const handleSubmit = (event) => {
    event.preventDefault()
/*     validateForm() */
    setdisplaySummary(true)
  }


/*   const cities = [
    {
      'id': 'la',
      'name': 'Los Angeles'
    },
    {
      'id': 'tokyo',
      'name': 'Tokyo'
    },
    {
      'id': 'stockholm',
      'name': 'Stockholm'
    },
    {
      'id': 'berlin',
      'name': 'Berlin'
    }
  ] */

  //all props
  const [displaySummary, setdisplaySummary] = useState(false)
  const [email, setEmail] = useState('')
  const [workArea, setWorkArea] = useState()
  const [place, setPlace] = useState(false)


  return (
    <div className = 'container'>
{/* If displaySummary is false (default) show what is inside ( ) */}
    {!displaySummary ? (
      <div className='main'>
        <Welcome
        />

        <div className='formContainer'>
        <form onSubmit={handleSubmit}>
        {/* 1st question - email */}
          <section
          className='email'
          id='email'>
            <Email
            email={email}
            setEmail={setEmail}
            />
          </section>
        {/* 2nd question - type of work */}
          <section
          className='workArea'
          id='workArea'>
            <WorkArea
            workArea={workArea}
            setWorkArea={setWorkArea}
            />
          </section>
        {/* 3rd question - which office */}
          <section
          className='place'
          id='place'>            
            <Place 
            place={place}
            setPlace={setPlace}/>
          </section>

        </form>
        </div>
      </div>

      ) : (
        // If displaySummary is true (set when pushing submit button) display this:
        <section
        className='summary'
        tabIndex='0'>
          <Summary
          email={email}
          workArea={workArea}
          place={place}
          />
        </section>
      )
    } 
    </div>
  )
}

/* {cities.map((city) => {
  return(
    <Place
    key={city.name}
    place={city.name}
    setPlace={setPlace}
    id={city.id}
    />
  )
})} */