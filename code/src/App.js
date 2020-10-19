import React from 'react'
import SurveyQuestions from './SurveyQuestions'
import Header from './Header'

export const App = () => {
  return (
    <section className="app-wrapper">
      <Header />
      <SurveyQuestions /> 
    </section>
  )
}
