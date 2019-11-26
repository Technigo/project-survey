import React from 'react'

export const SurveySection = (props) => {
  return (
    <section className="survey-section">
      <h2 className="survey-question-title">{props.title}</h2>
      <p className="survey-question-description">{props.description}</p>
      {props.children}
    </section>
  )
}