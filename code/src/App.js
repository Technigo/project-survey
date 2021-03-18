import React from 'react'

import Header from './Components/Header.js'
import Question1 from './Components/Question1.js'
import Question2 from './Components/Question2.js'
import Question3 from './Components/Question3.js'
import Question4 from './Components/Question4.js'
import Question5 from './Components/Question5.js'
import Question6 from './Components/Question6.js'
import Question7 from './Components/Question7.js'

export const App = () => {

  return (
    <main>
      <article className="survey-page">
          <Header headline="Airline Website Online Survey"/>
          <form onSubmit={AddSummeryButton} className="survey-form">
            <Question1 className="survey-question" />
            <Question2 className="survey-question" />
            <Question3 className="survey-question" />
            <Question4 className="survey-question" />
            <Question5 className="survey-question" />
            <Question6 className="survey-question" />
            <Question7 className="survey-question" />
            <input className="submit-button" type="submit" value="Submit"/>
          </form>
      </article>
    </main>
  )
  
}

  
 

export const AddSummeryButton = (event) => {
  event.preventDefault() 
  alert('The form was submitted') 
  
  }

  
