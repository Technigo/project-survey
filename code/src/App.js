import React from 'react'
import Header from './Components/Header.js'
import Question1 from './Components/Question1.js'
import Question2 from './Components/Question2.js'
import Question3 from './Components/Question3.js'
import Question6 from './Components/Question6.js'


export const App = () => {
  return (
    <main>
      <article className="survey-page">
          <Header headline="Airline Website Online Survey"/>
          <form onSubmit={event => event.preventDefault()} className="survey-form">
            <Question1 className="survey-form" />
            <Question2 className="survey-form" />
            <Question3 className="survey-form" />
            <Question6 className="survey-form" />
          </form>
      </article>
    </main>
  )
}
