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

      <form>
        <div className='form-container'>

          <section className='email'>
            <Email
            email={email}
            setEmail={setEmail}
            />
          </section>


          <section className='work-area'>
            <WorkArea
            workArea={workArea}
            setWorkArea={setWorkArea}
            />
          </section>


          <section className='place'>
            <Place
            place={place}
            setPlace={setPlace}
            />
          </section>

        </div>
      </form>

    </div>
  )
}
