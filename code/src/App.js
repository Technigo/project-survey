import React, { useState } from 'react'

import Welcome from './components/Welcome'
import Email from './components/Email'
import WorkArea from './components/WorkArea'
import Place from './components/Place'



export const App = () => {

  const [email, setEmail] = useState('')
  const [workArea, setWorkArea] = useState()
  const [place, setPlace] = useState(false)

  return (
    <div className='main'>
      <Welcome />

      
        <div className='formContainer'>
        <form>
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
      

    </div>
  )
}
