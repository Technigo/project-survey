import React from 'react'
import InputNameForm from './InputNameForm'
import InputSelectColor from './InputSelectColor'
import InputAge from './InputAge'

const SurveyQuestions = () => {
  return (
    <section className="survey-section">
      <InputNameForm />
      {/* how do I make it so that there is a label above the name input-field? */}
      <InputAge />
      <InputSelectColor />
    </section>
  )
}
export default SurveyQuestions