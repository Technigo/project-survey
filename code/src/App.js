import React from 'react'

import Header from './components/Header'
import Question1 from './components/Question1'
import Question2 from './components/Question2'
import Question3 from './components/Question3'

export const App = () => {
  return (
    <>

    <Header />

    <section className='Survey'>
      <div>
        <Question1 />
      </div>
      <div>
        <Question2 />
      </div>
      <div>
        <Question3 />
      </div>
    </section>

    </>

  )
}
