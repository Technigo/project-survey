import React from 'react'
import './surveysection.css'

export const SurveySection = (props) => {
  return (
    <section id={props.id} className="survey-section">
      <h2 className="survey-question-title">{props.title}</h2>
      <p className="survey-question-description">{props.description}</p>
      {props.children}
    </section>
  )
}